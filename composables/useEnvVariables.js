const isDev = process.env.NODE_ENV !== "production";
export default function useAsyncDataStatus() {
  return { isDev };
}
