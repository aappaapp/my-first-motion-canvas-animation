import { Txt } from "@motion-canvas/2d/lib/components";
import { loop } from "@motion-canvas/core/lib/flow";
import { Reference } from "@motion-canvas/core/lib/utils";

export function* texts(text: Reference<Txt>, ...strings: string[]) {
    yield* loop(strings.length, (i) => text().text(strings[i], strings[i].length / 10));
}
