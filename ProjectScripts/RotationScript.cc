
using UnityEngine;
using System.Collections;

public class RotatingItem : MonoBehaviour {

//Use this to inialization

void Update() {
     transform.Rotate (new Vector3(time.deltaTime*50,0,0));
   }
}
