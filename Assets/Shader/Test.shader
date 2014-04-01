Shader "CubeMap/Test"
{
	Properties 
    {
			_CubeCam ("RenderTexture Cubemap", Cube) = "white" {}
	}
    
    SubShader
    {
    	Tags { "RenderType" = "Opaque" }
      
        CGPROGRAM
        #pragma surface surf Lambert
 
 		samplerCUBE _CubeCam;
 			
        struct Input
        {
            float3 worldRefl; // reflection: symetric of point of view by wolrdNormal 
        };
       

        

        void surf (Input IN, inout SurfaceOutput o)
        {
            o.Albedo = texCUBE (_CubeCam, IN.worldRefl).rgb; 
        }
        ENDCG
    } 
    Fallback "Diffuse"
}