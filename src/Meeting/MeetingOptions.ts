import {
  ISlideOptionsContext,
  SlideOptionsModule, VueInstance
} from "@comeen/comeen-play-sdk-js";

export default class MeetingOptionsModule extends SlideOptionsModule {
  constructor(context: ISlideOptionsContext) {
    super(context);
  }

  async onReady() {
    return true;
  };

  setup(props: Record<string, any>, vue: VueInstance, context: ISlideOptionsContext) {
    const { h } = vue;

    const update = context.update;

    const { Field, TextInput, Toggle } = this.context.components

    return () =>
      h("div", {}, [
        h(Field, { label: this.t('modules.meeting.options.meeting-number') }, [
          h(TextInput, {...update.option("meeting_number") })
        ]),
        h(Field, { label: this.t('modules.meeting.options.meeting-password') }, [
          h(TextInput, {...update.option("meeting_password") })
        ]),
      ]
    )
  }
}
