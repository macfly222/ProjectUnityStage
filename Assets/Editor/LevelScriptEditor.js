#pragma strict

@CustomEditor (LevelScript)
class LevelScriptEditor extends Editor 
{
    function OnInspectorGUI()
    {   
        var myLevelScript = target as LevelScript;
        
        myLevelScript.xp = EditorGUILayout.IntField("Experience", myLevelScript.xp);
        EditorGUILayout.LabelField("Level", myLevelScript.level().ToString());
    }
}