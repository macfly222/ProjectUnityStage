@script ExecuteInEditMode
	
	var cubemapsize = 1024;
	
	/*private var half_HFOV : int = HFOV/2;
	private var half_VFOV : int = VFOV/2;*/
	//private var obj : GameObject;
	private var cam : Camera;
	public var rtex : RenderTexture = null;
	/*public var HFOV : int = 90;
	public var VFOV : int = 90;*/
	
	function Start () 
	{
		//cam = GameObject.Find("Main Camera").camera;
		//UpdateCubemap( 63 );
	}
	
	
	function Update () 
	{	
			UpdateCubemap (63); // all six faces
	}
	
	
	function UpdateCubemap (faceMask : int) 
	{
		if (!rtex) 
		{
			rtex = new RenderTexture( cubemapsize, cubemapsize, 16, RenderTextureFormat.ARGB32 );
			//rtex.isPowerOfTwo = true;         // This line prevents the error
		}

		rtex.isCubemap = true;
		//rtex.Create();
		
		
		// Set the culling mask to all the built-in layers in order to render the cubemap properly.
		//cam.cullingMask = 0x00FF;
		
		// Manual Cubemap rendering process (1st pass)
		//RenderTexture.active = rtex;
		//cam.targetTexture = rtex;
		//cam.RenderToCubemap( rtex, faceMask );
		//cam.targetTexture = null;
		//RenderTexture.active = null;

		// Set the culling mask to the CubeMapLayer in order to rend only what we want when the 2nd automatic unity render pass occurs.
		//cam.cullingMask = 1 << LayerMask.NameToLayer( "DisplayLayer" );
		//GameObject.Find( "Display" ).renderer.sharedMaterial.SetTexture( "_CubeMap", rtex );
		/*GameObject.Find( "Display" ).renderer.sharedMaterial.SetInt("_HFOV", HFOV );
		GameObject.Find( "Display" ).renderer.sharedMaterial.SetInt("_VFOV", VFOV );
		GameObject.Find( "Display" ).renderer.sharedMaterial.SetInt("_Half_VFOV", half_VFOV );
		GameObject.Find( "Display" ).renderer.sharedMaterial.SetInt("_Half_VFOV", half_VFOV );*/
		
		//GameObject.Find( "Display" ).renderer.sharedMaterial.SetFloat("_PI", 3.1415 );
	}
	
	
	function OnDisable () 
	{
//		DestroyImmediate (cam);
//		DestroyImmediate (rtex);
	}