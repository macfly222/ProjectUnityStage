#pragma strict

@CustomEditor (CameraOption)
class CameraOptionEditor extends Editor 
{

	var aspect : boolean = false;
	
	
    function OnInspectorGUI()
    {   
        var CO = target as CameraOption;
  
        CO.debug_v_fov = EditorGUILayout.ObjectField("Debug GUI v",CO.debug_v_fov,typeof(GUIText));
        CO.debug_h_fov = EditorGUILayout.ObjectField("Debug GUI h",CO.debug_h_fov,typeof(GUIText));
  
        CO.custom_fov = EditorGUILayout.BeginToggleGroup ("Use H_FOV", CO.custom_fov) ;
        	CO.h_fov = EditorGUILayout.FloatField ("Horizontal FOV", CO.h_fov) ;
        EditorGUILayout.EndToggleGroup();
        
        CO.custom_resolution = EditorGUILayout.BeginToggleGroup("Use Custom resolution",CO.custom_resolution) ;
        	CO.x_res = EditorGUILayout.IntSlider("Width resolution",CO.x_res,640,1920);
        	CO.y_res = EditorGUILayout.IntSlider("Height resolution",CO.y_res,480,1080);
        EditorGUILayout.EndToggleGroup();
        
        CO.custom_aspect = EditorGUILayout.BeginToggleGroup ("Change Aspect",  CO.custom_aspect) ;
        	CO.aspect_ratio = EditorGUILayout.Slider ("Aspect ratio", CO.aspect_ratio,0.01,10) ;
        EditorGUILayout.EndToggleGroup();
    }
}