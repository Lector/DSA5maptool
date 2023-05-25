[h: input = json.toVars(macro.args, "in_")]
[h: output = json.set("{}", "name", getName(in_tokenId))]
[h: output = json.set(output, "input", input)]


[h: output = json.set(output, "mu", getProperty("mu", in_tokenId))]
[h: output = json.set(output, "kl", getProperty("kl", in_tokenId))]
[h: output = json.set(output, "in", getProperty("in", in_tokenId))]
[h: output = json.set(output, "ch", getProperty("ch", in_tokenId))]
[h: output = json.set(output, "ff", getProperty("ff", in_tokenId))]
[h: output = json.set(output, "ge", getProperty("ge", in_tokenId))]
[h: output = json.set(output, "ko", getProperty("ko", in_tokenId))]
[h: output = json.set(output, "kk", getProperty("kk", in_tokenId))]
[r: output]