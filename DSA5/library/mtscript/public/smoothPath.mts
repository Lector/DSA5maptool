[h: path = arg(0)]

[h: firstIndex = 0]
[h: lastIndex = json.length(path) - 1]
[h: tolerance = 30]
[h: simplified = json.append("[]", json.get(path, firstIndex))]

<!-- Der Algorithmus ist bewusst so ausgelegt dass er nur das ENDE des Pfades glättet. Das liegt daran dass dieses Skript nur für die Richtungsbestimmung da ist -->
[h: i = firstIndex]
[h, while(i < lastIndex - 1), Code:
{
    [h: maxDistanceSqr = 0]
    [h: maxDistanceIndex = i+1]
    [h: startPoint = json.get(path, i)]
    [h: endPoint = json.get(path, lastIndex)]
    [h: vectorX = json.get(endPoint, "x") - json.get(startPoint, "x")]
    [h: vectorY = json.get(endPoint, "y") - json.get(startPoint, "y")]
    [h,if(vectorX != 0 || vectorY != 0): vLength = sqrt(sqr(vectorX) + sqr(vectorY)); vLength = 0]
    [h, for(j, i+1, lastIndex), Code:
    {
        [h: point = json.get(path, j)]
        [h: pointVX = json.get(point, "x") - json.get(startPoint, "x")]
        [h: pointVY = json.get(point, "y") - json.get(startPoint, "y")]
        [h,if(pointVX != 0 || pointVY != 0): pointVLength = sqrt(sqr(pointVX) + sqr(pointVY)); pointVLength = 0]
        [h: dotProduct = vectorX * pointVX + vectorY * pointVY]

        [h,if(vLength > 0 && pointVLength > 0): cosine = dotProduct / (vLength * pointVLength); cosine = 1]
        [h: projectionLength = pointVLength * cosine]
        [h,if(vLength > 0): distanceSquared = sqr(pointVX - vectorX * projectionLength / vLength) + sqr(pointVY - vectorY * projectionLength / vLength); distanceSquared = 0]
        
        [h,if(distanceSquared > maxDistanceSqr): maxDistanceSqr = distanceSquared]
        [h,if(distanceSquared > maxDistanceSqr): maxDistanceIndex = j]
    }]
    [h, if(maxDistanceSqr > sqr(tolerance)), Code:
    {
        [h: simplified = json.append(simplified, json.get(path, maxDistanceIndex))]
        [h: i = maxDistanceIndex]
    };
    {
        [h: i = i+1]
    }]
}]

[h: simplified = json.append(simplified, json.get(path, lastIndex))]
[h: return(0, simplified)]