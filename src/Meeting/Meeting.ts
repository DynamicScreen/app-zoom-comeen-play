import {
  ISlideContext,
  IPublicSlide,
  SlideModule,
  VueInstance
} from "@comeen/comeen-play-sdk-js";

import { nextTick } from 'vue';

export default class MeetingSlideModule extends SlideModule {
  constructor(context: ISlideContext) {
    super(context);
  }

  async onReady() {
      return true;
  };

  setup(props: Record<string, any>, vue: VueInstance, context: ISlideContext) {
const en = require("/Users/nicolas/Desktop/DS/app-server/storage/apps//app-zoom-comeen-play/0.2.0/languages/en.json");
const fr = require("/Users/nicolas/Desktop/DS/app-server/storage/apps//app-zoom-comeen-play/0.2.0/languages/fr.json");
const translator: any = this.context.translator;
translator.addResourceBundle('en', 'meeting', en);
translator.addResourceBundle('fr', 'meeting', fr);
this.t = (key: string, namespace: string = 'meeting') => translator.t(key, {ns: namespace});

    const { h, reactive, ref } = vue;

    const slide = reactive(props.slide) as IPublicSlide;
    this.context = reactive(props.slide.context);

    const url = ref(slide.data.url);

    const setUrl = () => {
        url.value = slide.data.url;
    }

    this.context.onPrepare(async () => {
    });

    this.context.onReplay(async () => {
        setUrl();
    });

    this.context.onPlay(async () => {
        setUrl();
    });

    this.context.onPause(async () => {
    });
    this.context.onResume(async () => {
    });

    this.context.onEnded(async () => {
    });

    return () =>
      h("div", {
        class: "flex w-full h-full"
      }, [
        h("iframe", {
          class: "w-full h-full bg-white",
          src: url.value,
          frameBorder: 0,
          allowFullscreen: true,
          sandbox: "allow-scripts allow-forms allow-orientation-lock allow-same-origin allow-pointer-lock",
          allow: "geolocation; microphone; camera"
        })
      ])
  }
}
