@RD /S /Q "./addons"
mkdir addons
7z.exe a -tzip ./addons/DSA_Macros.mtlib ./DSA_Macros/* 
7z.exe a -tzip ./addons/DSA_Macros2.mtlib ./DSA_Macros2/*
7z.exe a -tzip ./addons/DSA_Tools.mtlib ./DSA_Tools/*
7z.exe a -tzip ./addons/DSA_Wildnis.mtlib ./DSA_Wildnis/*