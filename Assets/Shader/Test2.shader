Shader "CubeMap/Test2"
{
	Properties 
    {
			_CubeMap("RenderTexture Cubemap", CUBE) = "white" {}
	}
    
    SubShader
    {
    	Pass
    	{
	    	Tags { "RenderType" = "Opaque" }
	      
	        CGPROGRAM
	        #pragma vertex vert
	        #pragma fragment frag
	        #include "UnityCG.cginc"
	 
	 		uniform samplerCUBE _CubeMap;
//	 		int _HFOV;
//	 		int _Half_HFOV;
//	 		int _VFOV;
//	 		int _Half_VFOV;	 		
	 		//float _PI;
	 		
	       	void vert(	appdata_base v,
	       				out float2 blablabla : TEXCOORD0,
	       			   	out float4 oPosition : SV_POSITION )
			{				
//				oPosition = mul( UNITY_MATRIX_MV, v.vertex );
				oPosition = float4(v.vertex.x, v.vertex.y, 0, 1);
				blablabla = float2(0.5, 0.5);
				//oPosition = v.vertex;
	      	}

			void frag(  in float2 uv : TEXCOORD0, 
						out half4 oColor : COLOR )
			{
				// ANGLE CALCULATION
				//float ro = _VFOV *uv.y - ( _Half_VFOV );
				//float theta = _HFOV * uv.x - ( _Half_HFOV );
				
				//ro = _PI * (ro/180);
				//theta = _PI * (theta/180);
				
				// FETCH VECTOR CALCULATION MOFOOOOS
				//float x = sin( theta );
				//float y = sin( ro );
				//float z = cos( theta ) + cos( ro );
				//float3 fetchVector = float3( 0.5 , 0.5 , 0.1 );
				
				//OUTPUT
				//oColor = texCUBE( _CubeMap, fetchVector);
				//oColor = (0.5,0.5,0.5,1);
				oColor = half4(uv.x, uv.y, 0.5,1);
			}
	        

	        ENDCG
        }
    } 
    Fallback "Diffuse"
}