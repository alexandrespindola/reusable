import { ref } from "vue";

export function useMouse() {
  const mouseX = ref(0);
  const mouseY = ref(0);

  function updateMousePosition(event: MouseEvent) {
    mouseX.value = event.pageX;
    mouseY.value = event.pageY;
  }

  window.addEventListener("mousemove", updateMousePosition);

  return { mouseX, mouseY };
}
