type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, "a", "b">; // 'a'
type B = If<false, "a", "b">; // 'b'
