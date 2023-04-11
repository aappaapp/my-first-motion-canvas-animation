import { Circle, Rect, Txt } from "@motion-canvas/2d/lib/components";
import { makeScene2D } from "@motion-canvas/2d/lib/scenes";
import { all, waitFor, waitUntil } from "@motion-canvas/core/lib/flow";
import { createRef } from "@motion-canvas/core/lib/utils";
import { texts } from "../utils";
import { Vector2 } from "@motion-canvas/core/lib/types";
import { BounceSpring, PlopSpring, easeInOutCubic, spring } from "@motion-canvas/core/lib/tweening";

export default makeScene2D(function* (view) {
    const text = createRef<Txt>();

    view.add(
        <Rect fill="#000000" height="100%" width="100%">
            <Txt ref={text} fill="#ffffff" fontFamily="Noto Sans TC" fontWeight={900} />
        </Rect>
    );

    yield* texts(
        text,
        "Hello Guys",
        "I haven't made a video in a long long time",
        "So today, I am going to play the best-selling video game of all time",
        "ROBLOX"
    );
    yield* waitFor(1);
    text().text("EM... This isn't an animation...");
    yield* waitFor(1);
    text().text("I can give you bouncing balls!");
    yield* waitFor(1);
    const circle1 = createRef<Circle>();
    view.add(<Circle fill="#ff0000" height={100} width={100} ref={circle1} />);
    yield* spring(PlopSpring, 1, 0.5, 0, (value) => {
        circle1().scale(value);
    });
});
