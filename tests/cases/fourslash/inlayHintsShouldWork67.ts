/// <reference path="fourslash.ts" />

////function trace(a: string, b?: string) {}
////trace('');
////trace(/*a*/'', /*b*/'');

const [a, b] = test.markers();
verify.getInlayHints([
    {
        text: 'a:',
        position: a.position,
        kind: ts.InlayHintKind.Parameter,
        whitespaceAfter: true
    },
    {
        text: 'b:',
        position: b.position,
        kind: ts.InlayHintKind.Parameter,
        whitespaceAfter: true
    },
], undefined, {
    includeInlayParameterNameHints: "all",
    includeInlayParameterNameHintsMinCount: 2,
});
