using UnityEngine;
using System.Collections;

public class DeathZone : MonoBehavior {
    public Transform spawnPoint;

  void onTriggerEnter(Collider other) { 
      other.gameObject.transform.position = spawnPoint.position;
  }
}
