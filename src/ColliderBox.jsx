import { useBox } from "@react-three/cannon";
import toast from "react-hot-toast";

const debug = false;

export function ColliderBox({ position, scale }) {
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
    onCollide: (e) => {
      var modal = document.getElementById("myModal");
      toast.error("Collision occurred!");
      modal.style.display = "block";
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      var score = localStorage.getItem("score");

      localStorage.setItem("score", score - 5);

      console.log(score);

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  }));

  return (
    debug && (
      <mesh position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.25} />
      </mesh>
    )
  );
}
