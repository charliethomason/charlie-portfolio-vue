import { markRaw } from "vue";
import LinkedinIcon from "./linkedin.vue";
import InstagramIcon from "./instagram.vue";
import YouTubeIcon from "./youtube.vue";
import GithubIcon from "./github.vue";
import LetterboxdIcon from "./letterboxd.vue";
import GoodreadsIcon from "./goodreads.vue";

export default {
  LinkedIn: markRaw(LinkedinIcon),
  Instagram: markRaw(InstagramIcon),
  YouTube: markRaw(YouTubeIcon),
  Github: markRaw(GithubIcon),
  Letterboxd: markRaw(LetterboxdIcon),
  GoodReads: markRaw(GoodreadsIcon)
};
