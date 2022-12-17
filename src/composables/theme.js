import { ref } from "vue";

const darkTheme = ref(true);
export default function useTheme() {
  const changeTheme = () => (darkTheme.value = !darkTheme.value);

  return { darkTheme, changeTheme };
}
