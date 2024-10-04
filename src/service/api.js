import axios from "axios";

const MAIN_API_URL =
  "https://api.sokanacademy.com/api/blogs/8-common-data-structures-every-programmer-must-know";
const RELATED_API_URL = "https://api.sokanacademy.com/api/related";

export async function getMainApi() {
  try {
    const { data } = await axios.get(MAIN_API_URL);
    return data.data;
  } catch (error) {
    console.warn("BLOG_URL has ERROR!!!");
    console.log(error);
  }
}
export async function getRelatedApi() {
  try {
    const { data } = await axios.get(RELATED_API_URL, {
      params: {
        entity_type: "blog",
        entity_slug: "8-common-data-structures-every-programmer-must-know",
        domain: "blog,section,course,word",
        take: "6",
      },
    });
    return data.data;
  } catch (error) {
    console.warn("RELATED_URL has ERROR!!!");
    console.log(error);
  }
}
