# @ctx-core/object

## 30.4.5

### Patch Changes

- ctx-core: ^3.3.0 -> ^3.3.1

## 30.4.4

### Patch Changes

- ctx-core: ^3.2.2 -> ^3.3.0

## 30.4.3

### Patch Changes

- be\_: + be\_\_debug: extracted error checking: - 67B
- Updated dependencies
  - ctx-core@3.2.2

## 30.4.2

### Patch Changes

- ctx-core: ^3.2.0 -> ^3.2.1

## 30.4.1

### Patch Changes

- ctx-core: ^3.1.0 -> ^3.2.0
- tsx: ^4.1.2 -> ^4.1.3

## 30.4.0

### Minor Changes

- be\_: shorten error messages

  ctx\__delete: - is_source_ check

  size-limit: - 135B

### Patch Changes

- Updated dependencies
  - ctx-core@3.1.0

## 30.3.1

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@3.0.0

## 30.3.0

### Minor Changes

- - prototype\_\_set
- - defineProperty
- - getPrototypeOf: aliased by prototype\_
- - defineProperties
- - setPrototypeOf: aliased by prototype\_\_set

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@2.4.0

## 30.2.0

### Minor Changes

- - prototype\_

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@2.3.0

## 30.1.3

### Patch Changes

- package.json: files: + \*.js
- Updated dependencies
  - ctx-core@2.2.2

## 30.1.2

### Patch Changes

- fix: missing tsconfig.json
- Updated dependencies
  - ctx-core@2.2.1

## 30.1.1

### Patch Changes

- ctx-core: ^2.1.0 -> ^2.2.0
- tsx: ^4.0.0 -> ^4.1.2

## 30.1.0

### Minor Changes

- fix:types package.json exports
- tsconfig:

      "module": "ESNext"
      "moduleResolution": "nodenext"
      "target": "ESNext"

- ∋ ctx-core/object

### Patch Changes

- package.json: - "svelte": "./src/index.js"
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - ctx-core@2.1.0

## 30.0.0

### Major Changes

- ctx\__delete: - is_source_ argument: used internally

## 29.1.0

### Minor Changes

- Be<unknown> instead of Be<any>:

      be__is_source_
      be__has_
      be__has__ctx_
      MapCtx

## 29.0.0

### Major Changes

- be**is*source*→be**is_source\_\_

### Minor Changes

- - be_arg_triple
- be\_: initial value: allow undefined
- - be\__has_
- - be**has**ctx\_

## 28.2.2

### Patch Changes

- be*: arguments: fix type that was too narrow: val*:be**val**T<Val, ctx_T>

## 28.2.1

### Patch Changes

- tsx: ^3.13.0 -> ^3.14.0
- Updated dependencies
  - @ctx-core/function@21.20.2

## 28.2.0

### Minor Changes

- - ctx\__new: aliased by ctx_

## 28.1.0

### Minor Changes

- Be: + &{ id?:string }

## 28.0.7

### Patch Changes

- version bump
- Updated dependencies
  - @ctx-core/function@21.20.1

## 28.0.6

### Patch Changes

- @ctx-core/function: ^21.19.0 -> ^21.20.0

## 28.0.5

### Patch Changes

- be\_: circular dependency error: pending_value_a members that are functions are printed to console.error as 'function'

## 28.0.4

### Patch Changes

- @ctx-core/function: ^21.18.0 -> ^21.19.0

## 28.0.3

### Patch Changes

- be*: fix: val* receives Ctx instead of MapCtx

## 28.0.2

### Patch Changes

- be*: fix: ctx passed into val* matches is*source* ctx

## 28.0.1

### Patch Changes

- Be: arguments: opts=>params: params?:be_params_T

## 28.0.0

### Major Changes

- ctx\_\_delete: argument order change:

      (ctx:Ctx, be_OR_id:Be<Val>|string|symbol, val:Val, is_source_?:is_source__T)

## 27.9.0

### Minor Changes

- - be*prop_pair*,be_prop_pair_T

### Patch Changes

- ctx\__set: is_source_: fix: nullish values are defaulted to ()=>true

## 27.8.1

### Patch Changes

- fix test

## 27.8.0

### Minor Changes

- ctx\_\_set: argument order change:

      (ctx:Ctx, be_OR_id:Be<Val>|string|symbol, val:Val, is_source_?:is_source__T)

## 27.7.0

### Minor Changes

- ctx\_\_set: argument order change:

      (ctx:Ctx, be_OR_id:Be<Val>|string|symbol, val:Val, is_source_?:is_source__T)

## 27.6.0

### Minor Changes

- ctx\_\_set: set the value of a be|string|symbol on a Ctx

## 27.5.0

### Minor Changes

- be**params*T: + be*?:typeof be\_|typeof globalThis**be\_

### Patch Changes

- globalThis\__be_: fix: + polymorphic arguments matching be\_

## 27.4.26

### Patch Changes

- be*: val*: when returns undefined: no id: error message: + function definition

## 27.4.25

### Patch Changes

- be\_: argument name change:

      id_or_val_=>id_OR_val_
      val__or_be__params=>val__OR_be__params

## 27.4.24

### Patch Changes

- @ctx-core/function: ^21.17.19 -> ^21.18.0

## 27.4.23

### Patch Changes

- @ctx-core/monorepo: ^20.3.3 -> ^20.3.4
- Updated dependencies
  - @ctx-core/function@21.17.19

## 27.4.22

### Patch Changes

- @ctx-core/monorepo: ^20.3.1 -> ^20.3.2
- @ctx-core/dev-tools: 8.1.111 -> 8.1.112
- @ctx-core/function: ^21.17.16 -> ^21.17.17
- @ctx-core/queue: ^7.5.18 -> ^7.5.19
- @ctx-core/git-tools: ^7.0.61 -> ^7.0.62
- @ctx-core/build: 1.0.299 -> 1.0.300
- @ctx-core/ctx-core-package-tools: ^8.0.191 -> ^8.0.192
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@21.17.18

## 27.4.21

### Patch Changes

- @ctx-core/monorepo: ^20.3.0 -> ^20.3.1
- @ctx-core/git-tools: ^7.0.60 -> ^7.0.61
- @ctx-core/function: ^21.17.15 -> ^21.17.16
- @ctx-core/dev-tools: 8.1.110 -> 8.1.111
- @ctx-core/build: 1.0.298 -> 1.0.299
- @ctx-core/ctx-core-package-tools: ^8.0.190 -> ^8.0.191
- @ctx-core/queue: ^7.5.17 -> ^7.5.18
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@21.17.17

## 27.4.20

### Patch Changes

- @ctx-core/queue: ^7.5.16 -> ^7.5.17
- @ctx-core/dev-tools: 8.1.109 -> 8.1.110
- @ctx-core/git-tools: ^7.0.59 -> ^7.0.60
- @ctx-core/monorepo: ^20.2.3 -> ^20.3.0
- @ctx-core/ctx-core-package-tools: ^8.0.189 -> ^8.0.190
- @ctx-core/build: 1.0.297 -> 1.0.298
- @ctx-core/function: ^21.17.14 -> ^21.17.15
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@21.17.16

## 27.4.19

### Patch Changes

- @ctx-core/git-tools: ^7.0.58 -> ^7.0.59
- @ctx-core/queue: ^7.5.15 -> ^7.5.16
- @ctx-core/build: 1.0.296 -> 1.0.297
- @ctx-core/monorepo: ^20.2.2 -> ^20.2.3
- @ctx-core/ctx-core-package-tools: ^8.0.188 -> ^8.0.189
- @ctx-core/dev-tools: 8.1.108 -> 8.1.109
- @ctx-core/function: ^21.17.13 -> ^21.17.14
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@21.17.15

## 27.4.18

### Patch Changes

- @ctx-core/dev-tools: 8.1.107 -> 8.1.108
- @ctx-core/build: 1.0.295 -> 1.0.296
- @ctx-core/git-tools: ^7.0.57 -> ^7.0.58
- @ctx-core/ctx-core-package-tools: ^8.0.187 -> ^8.0.188
- @ctx-core/monorepo: ^20.2.1 -> ^20.2.2
- @ctx-core/function: ^21.17.12 -> ^21.17.13
- @ctx-core/queue: ^7.5.13 -> ^7.5.15
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@21.17.14

## 27.4.17

### Patch Changes

- @ctx-core/dev-tools: 8.1.94 -> 8.1.107
- @pnpm/list: ^9.0.2 -> ^9.0.3
- @ctx-core/queue: ^7.5.1 -> ^7.5.13
- pnpm: 8.2.0 -> 8.3.0
- @ctx-core/build: 1.0.281 -> 1.0.295
- @ctx-core/git-tools: ^7.0.45 -> ^7.0.57
- @ctx-core/monorepo: ^20.1.0 -> ^20.2.1
- @pnpm/sort-packages: ^5.0.0 -> ^5.0.1
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@21.17.13

## 27.4.4

### Patch Changes

- @ctx-core/function: ^21.16.0 -> ^21.17.0

## 27.4.3

### Patch Changes

- @ctx-core/function: ^21.15.0 -> ^21.16.0

## 27.4.2

### Patch Changes

- @ctx-core/function: ^21.14.0 -> ^21.15.0

## 27.4.1

### Patch Changes

- be_opts_T alias: fix: export type be**opts_T = be**params_T

## 27.4.0

### Minor Changes

- be_params_T: aliased by be_opts_T
- - be\_\_params_T: aliased by be\_\_opts_T

## 27.3.4

### Patch Changes

- @ctx-core/function: ^21.13.1 -> ^21.14.0

## 27.3.3

### Patch Changes

- @ctx-core/function: ^21.13.0 -> ^21.13.1

## 27.3.2

### Patch Changes

- @ctx-core/function: ^21.12.2 -> ^21.13.0

## 27.3.1

### Patch Changes

- ∋ globalThis**prop**ensure

## 27.3.0

### Minor Changes

- - globalThis\_\_prop\_\_ensure

## 27.2.0

### Minor Changes

- - globalThis\__be_

## 27.1.7

### Patch Changes

- @ctx-core/function: ^21.12.1 -> ^21.12.2

## 27.1.6

### Patch Changes

- @ctx-core/function: ^21.12.0 -> ^21.12.1

## 27.1.5

### Patch Changes

- @ctx-core/function: ^21.11.0 -> ^21.12.0

## 27.1.4

### Patch Changes

- isArray: fix: export { isArray } from '@ctx-core/function'

## 27.1.3

### Patch Changes

- be\_: jsdoc: + Auto-memoization function for the Ctx.

## 27.1.2

### Patch Changes

- @ctx-core/function: ^21.10.1 -> ^21.11.0

## 27.1.1

### Patch Changes

- @ctx-core/function: ^21.9.0 -> ^21.10.0
- Updated dependencies
  - @ctx-core/function@21.10.1

## 27.1.0

### Minor Changes

- - is*ctx*

### Patch Changes

- Updated dependencies
- Updated dependencies
  - @ctx-core/function@21.9.0

## 27.0.0

### Major Changes

- be\_\_opts_T: - type generic

## 26.0.0

### Major Changes

- Be: label=>id
- be\_,be**set,be**delete: ctx.get(id) is a single value instead of be_M_val
- - be**label**value\_\_Map_T
- be*: throw Error if id is previously set by a call to another be*

### Minor Changes

- globalThis[Symbol.for('be_M_id')] = new WeakMap

## 25.2.1

### Patch Changes

- be*M_is_source*: fix: set globalThis[be_M_is_source__sym] to support multiple versions of this library in the runtime

## 25.2.0

### Minor Changes

- - be\__is_source_
- - expired\_\_T

### Patch Changes

- be\_\_set: NestedMapCtx: fix: set label value in addition to be value
- be*: fix: immediately register be\_\_opts.is_source* into be\__is_source_ when be is instantiated
- be**opts_T: fix: + expired?:expired**T
- be**set: before be is invoked for the first time: fix: correctly use is*source* from be**is*source*

## 25.1.0

### Minor Changes

- be\__val_: also support label argument

## 25.0.1

### Patch Changes

- be\__val_: fix: return type

## 25.0.0

### Major Changes

- be\_\_set: argument order: (be:Be<Val>, argv\*\*ctx:Ctx)
- be**delete: argument order: (be:Be<Val>, argv**ctx:Ctx)

### Minor Changes

- - or_null\_\_opts_T: aliased by opts_or
- - ensure\_\_refresh_opts_T: aliased by refresh_ctx_T
- - be\__val_<Val>(be:Be<Val>, ctx:Ctx):Val
- - strong\_\_call: aliased by ref_strong
- - weak\_\_call: aliased by ref_weak
- - strong\_\_assign: aliased by set_strong
- - ensure_refresh\_\_o_T: aliased by ensure_refresh_obj_type

### Patch Changes

- omit: fix: generic type: <I extends object = object>
- value*key_aa*: fix: generic type: <I extends object = object>
- omit\_: fix: generic type: <T extends object = object>

## 24.1.8

### Patch Changes

- @ctx-core/function: ^21.7.2 -> ^21.8.0

## 24.1.7

### Patch Changes

- @ctx-core/function: ^21.7.1 -> ^21.7.2

## 24.1.6

### Patch Changes

- @ctx-core/function: ^21.7.0 -> ^21.7.1

## 24.1.5

### Patch Changes

- @ctx-core/function: ^21.6.1 -> ^21.7.0

## 24.1.4

### Patch Changes

- be\_: error: - console.trace: rely on throw new Error for correct stack trace

## 24.1.3

### Patch Changes

- be\_: throw new Error(error_msg)

## 24.1.2

### Patch Changes

- be**label**value\_\_Map_T: fix: key type: Be<NonNullable<unknown>>

## 24.1.1

### Patch Changes

- tsconfig.json: - importsNotUsedAsValues
- Updated dependencies
  - @ctx-core/function@21.6.1

## 24.1.0

### Minor Changes

- be\_: key=>label
- - be**label**value\_\_Map_T

## 24.0.1

### Patch Changes

- be\_: error: be must have a Ctx passed as an argument: + console.trace

## 24.0.0

### Major Changes

- pending_symbol,alias_symbol: private Symbol.for

### Minor Changes

- be**delete: aliased by ctx**delete
- - be**set: aliased by ctx**set

## 23.1.0

### Minor Changes

- be\_,Be,be**val**T: Ctx generic type

## 23.0.1

### Patch Changes

- be*: is_source* must be true for at least one Ctx error msg: + key

## 23.0.0

### Major Changes

- - ctx**delete: replaces be* expired* option in be**opts_T
- - - alias_symbol in ctx
- - string alias is now a Map<Be, value>

## 22.10.0

### Minor Changes

- be*: be\_\_opts_T: feat: + expired*: if the value is cached & expired\_ returns true, rerun the initializer function

## 22.9.1

### Patch Changes

- error message: is*source* must be true for at least one Ctx: ∋ console.trace

## 22.9.0

### Minor Changes

- export interface NestedMapCtx

## 22.8.2

### Patch Changes

- be*: be: val* argument: fix: pass in nested Ctx (argv\_\_ctx) as an argument instead of the source MapCtx

## 22.8.1

### Patch Changes

- Ctx: handle arrays wrapping a Ctx instance: + NestedMapCtx

## 22.8.0

### Minor Changes

- be\__opts_T: is_ctx_=>is*source*

## 22.7.0

### Minor Changes

- set**ctx**match*=>is_ctx*

## 22.6.0

### Minor Changes

- be*: + opts:be**opts_T: + set**ctx\_\_match*

  set**ctx**match\_ returns a boolean if the given MapCtx will be used to set the factory function argument

## 22.5.0

### Minor Changes

- Ctx: feat: nesting in an array

  - PrimitiveCtx

  be\_: handle nested Ctx Map or array

## 22.4.1

### Patch Changes

- Map\__object_: fix: generic type issue: K extends string | number | symbol

## 22.4.0

### Minor Changes

- - Map**object\_,M**o\_: convert Map to object

## 22.3.0

### Minor Changes

- extract _.js & _.d.ts into directories

### Patch Changes

- Be as be**return_T,Be as be_T: fix: difference between Be & be**return_T

## 22.2.8

### Patch Changes

- @ctx-core/function: ^21.0.1 -> ^21.1.0

## 22.2.7

### Patch Changes

- tsx: ^3.8.2 -> ^3.9.0
- Updated dependencies
  - @ctx-core/function@21.0.1

## 22.2.6

### Patch Changes

- @ctx-core/function: 21.0.0

## 22.2.5

### Patch Changes

- Updated dependencies
  - @ctx-core/function@21.0.0

## 22.2.4

### Patch Changes

- @ctx-core/function: 20.10.0

## 22.2.3

### Patch Changes

- @ctx-core/function: 20.9.1

## 22.2.2

### Patch Changes

- @ctx-core: 20.9.0

## 22.2.1

### Patch Changes

- fix: Ctx: type

## 22.2.0

### Minor Changes

- feat: be\_: circular dependency: +pending_value_a in console.error message

## 22.1.10

### Patch Changes

- @ctx-core/function: 20.8.0

## 22.1.9

### Patch Changes

- obj*key_r*: fix: generic types: <T>
- obj*key_r*<T>: fix: generic type inference

## 22.1.8

### Patch Changes

- @ctx-core/function: 20.7.1
- Updated dependencies
  - @ctx-core/function@20.7.2

## 22.1.7

### Patch Changes

- @ctx-core/array: 26.2.0

## 22.1.6

### Patch Changes

- update dependencies

## 22.1.5

### Patch Changes

- fix: @ctx-core/\* dependencies

## 22.1.4

### Patch Changes

- package.json: exports: update
- Updated dependencies
  - @ctx-core/function@20.6.1

## 22.1.3

### Patch Changes

- version bump

## 22.1.2

### Patch Changes

- fix: obj*key_r*: return type

## 22.1.1

### Patch Changes

- update dependencies

## 22.1.0

### Minor Changes

- - entries*gen*

## 22.0.13

### Patch Changes

- assign,keys,values: typeof Object.\* instead of hardcoded type declaration

## 22.0.12

### Patch Changes

- sideEffects = false
- Updated dependencies
  - @ctx-core/function@20.2.25

## 22.0.11

### Patch Changes

- uvu: ^0.5.2 -> ^0.5.3
- Updated dependencies
  - @ctx-core/function@20.2.24

## 22.0.10

### Patch Changes

- version bump
- Updated dependencies
  - @ctx-core/function@20.2.23

## 22.0.9

### Patch Changes

- fix: remove incorrect sourcemap annotation
- Updated dependencies
  - @ctx-core/function@20.2.22

## 22.0.8

### Patch Changes

- fix: error TS6059: \* is not under 'rootDir': package.json: types: ./dist/index.d.ts
- Updated dependencies
  - @ctx-core/function@20.2.20

## 22.0.7

### Patch Changes

- tsconfig.json: "target": "ES2021"
- Updated dependencies
  - @ctx-core/function@20.2.19

## 22.0.6

### Patch Changes

- package.json: "types": "./src/index.ts": better editing experience
- Updated dependencies
  - @ctx-core/function@20.2.18

## 22.0.5

### Patch Changes

- fix: build
- Updated dependencies
  - @ctx-core/function@20.2.17

## 22.0.4

### Patch Changes

- \*.d.ts export
- Updated dependencies
  - @ctx-core/function@20.2.16

## 22.0.3

### Patch Changes

- fix: tsconfig.json: "rootDir": "."
- Updated dependencies
  - @ctx-core/function@20.2.15

## 22.0.2

### Patch Changes

- fix: package.json: exports
- Updated dependencies
  - @ctx-core/function@20.2.14

## 22.0.1

### Patch Changes

- package.json: svelte: ./dist/index.js
- Updated dependencies
  - @ctx-core/function@20.2.13

## 22.0.0

### Major Changes

- BREAKING CHANGE: be\_,be: ctx is a Map: Be<Out extends NonNullable<unknown>> = (ctx:Ctx, opts?:be_opts_T)=>Out

  - Ctx,be\_\_return_T

### Patch Changes

- package.json: - module

## 21.0.30

### Patch Changes

- update dependencies

## 21.0.29

### Patch Changes

- @swc/core: ^1.2.117 -> ^1.2.118
- Updated dependencies
  - @ctx-core/function@20.2.10

## 21.0.28

### Patch Changes

- @swc/core: ^1.2.116 -> ^1.2.117
- Updated dependencies
  - @ctx-core/function@20.2.9

## 21.0.27

### Patch Changes

- @swc/core: ^1.2.113 -> ^1.2.116
- Updated dependencies
  - @ctx-core/function@20.2.8

## 21.0.26

### Patch Changes

- @swc/cli: ^0.1.51 -> ^0.1.52
- @swc/core: ^1.2.111 -> ^1.2.113
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@20.2.7

## 21.0.25

### Patch Changes

- @swc/core: ^1.2.110 -> ^1.2.111
- Updated dependencies
  - @ctx-core/function@20.2.6

## 21.0.24

### Patch Changes

- typescript: ^4.4.4 -> ^4.5.2
- @swc/core: ^1.2.108 -> ^1.2.110
- Updated dependencies
- Updated dependencies
  - @ctx-core/function@20.2.5

## 21.0.23

### Patch Changes

- @swc/core: ^1.2.107 -> ^1.2.108
- Updated dependencies
  - @ctx-core/function@20.2.4

## 21.0.22

### Patch Changes

- compile using swc
- Updated dependencies
  - @ctx-core/function@20.2.3

## 21.0.21

### Patch Changes

- typescript: ^4.4.3 -> ^4.4.4
- Updated dependencies [undefined]
  - @ctx-core/function@20.2.2

## 21.0.20

### Patch Changes

- update dependencies

## 21.0.19

### Patch Changes

- update dependencies

## 21.0.18

### Patch Changes

- typescript: ^4.4.2 -> ^4.4.3
- Updated dependencies [undefined]
  - @ctx-core/function@20.1.4

## 21.0.17

### Patch Changes

- typescript: ^4.3.5 -> ^4.4.2
- Updated dependencies [undefined]
  - @ctx-core/function@20.1.3

## 21.0.16

### Patch Changes

- update dependencies

## 21.0.15

### Patch Changes

- update dependencies

## 21.0.14

### Patch Changes

- update dependencies

## 21.0.13

### Patch Changes

- update dependencies

## 21.0.12

### Patch Changes

- fix: "exports": "./package.json": "./package.json"
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.12

## 21.0.11

### Patch Changes

- exports: + "package.json": "./package.json"
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.11

## 21.0.10

### Patch Changes

- fix: sourceMappingURL: "mapRoot": ""
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.10

## 21.0.9

### Patch Changes

- tsconfig.json: "target": "es2019"
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.9

## 21.0.8

### Patch Changes

- fix: cjs: load as a Promise
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.8

## 21.0.7

### Patch Changes

- "main": "./dist/index.cjs"
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.7

## 21.0.6

### Patch Changes

- fix: index.cjs: module.exports = require('./index.js')
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.6

## 21.0.5

### Patch Changes

- back to esm module with cjs using esm npm package to load library
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.5

## 21.0.4

### Patch Changes

- back to esm module with cjs using esm npm package to load library
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.4

## 21.0.3

### Patch Changes

- support cjs & esm: + "exports"
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.3

## 21.0.2

### Patch Changes

- fix: "type": "module"
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.2

## 21.0.1

### Patch Changes

- 2a6971f80: fix: "type": "module"
- fix: "type": "module"
- Updated dependencies [2a6971f80]
- Updated dependencies [undefined]
  - @ctx-core/function@20.0.1

## 21.0.0

### Major Changes

- "type": "module": module npm type

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@20.0.0

## 20.5.0

### Minor Changes

- aa instead of a2,aaa instead of a3

## 20.4.2

### Patch Changes

- update dependencies

## 20.4.1

### Patch Changes

- nullish*or*: + or\_ argument

## 20.4.0

### Minor Changes

- nullish*or*

## 20.3.0

### Minor Changes

- ref_strong,set_strong,ref_weak,unset_weak,weak_r_T: string|symbol->keyof_T
- - keyof_T

## 20.2.5

### Patch Changes

- update dependencies

## 20.2.4

### Patch Changes

- typescript: ^4.3.4 -> ^4.3.5
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.12

## 20.2.3

### Patch Changes

- update dependencies

## 20.2.2

### Patch Changes

- dist directory
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.10

## 20.2.1

### Patch Changes

- update dependencies

## 20.2.0

### Minor Changes

- weak*r* as weak*ctx*
- weak*r*: + add_strong,delete_strong: add/delete strong reference keys on the record
- - ref_strong,set_strong,ref_weak,unset_weak,weak_r_T

## 20.1.4

### Patch Changes

- update dependencies

## 20.1.3

### Patch Changes

- fix: ctx\_: check for deref in value

## 20.1.2

### Patch Changes

- ctx\_: back_ctx = {} argument

## 20.1.1

### Patch Changes

- tsconfig.json: "lib": ["dom", "ESNext"]
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.8

## 20.1.0

### Minor Changes

- - ctx\_: returns a ctx storing the values using a WeakRef to garbage collect unused values

## 20.0.8

### Patch Changes

- "prepublishOnly": "npm run clean && npm run compile"
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.7

## 20.0.7

### Patch Changes

- fix: deploying \*.js files
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.6

## 20.0.6

### Patch Changes

- "prepare": "npm run clean && npm run compile"
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.5

## 20.0.5

### Patch Changes

- npm run prepare instead of npm run prepublishOnly
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.4

## 20.0.4

### Patch Changes

- fix: npm run clean
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.3

## 20.0.3

### Patch Changes

- typescript: ^4.3.3 -> ^4.3.4
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.2

## 20.0.2

### Patch Changes

- typescript: ^4.3.2 -> ^4.3.3
- Updated dependencies [undefined]
  - @ctx-core/function@19.1.1

## 20.0.1

### Patch Changes

- update dependencies

## 20.0.0

### Major Changes

- move from dist to src directory

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@19.0.0

## 19.3.0

### Minor Changes

- zip*o*: <Obj extends object = object>(key_a:(keyof Obj)[], val_a:Obj[keyof Obj][]): Obj
- zip\__o_: alias to zip*h*

## 19.2.0

### Minor Changes

- pick*val_a*: alias to pick*value_a*

### Patch Changes

- fix: pick*val_a*: Obj type represents an object key_a being (keyof Obj)[]

## 19.1.5

### Patch Changes

- fix: zip*h*: return value
- zip*h* with zip*ctx* alias

## 19.1.4

### Patch Changes

- fix: map*obj,map_obj*,map*obj_andand,map_obj_andand*: return type

## 19.1.3

### Patch Changes

- version bump: run build
- Updated dependencies [undefined]
  - @ctx-core/function@18.1.3

## 19.1.2

### Patch Changes

- fix: build: clean up old build files in dist
- Updated dependencies [undefined]
  - @ctx-core/function@18.1.2

## 19.1.1

### Patch Changes

- update dependencies

## 19.1.0

### Minor Changes

- feat: be,b,rc_be,rc_b

## 19.0.4

### Patch Changes

- a*assign,zip_ctx*

## 19.0.3

### Patch Changes

- update dependencies

## 19.0.2

### Patch Changes

- _b->be_

## 19.0.1

### Patch Changes

- update dependencies

## 19.0.0

### Major Changes

- \$ suffix for stores
- \_ suffix for factory functions

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/function@18.0.0

## 18.2.1

### Patch Changes

- update dependencies
- Updated dependencies [undefined]
  - @ctx-core/function@17.11.1

## 18.2.0

### Minor Changes

- fix tsc build directory issues

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.11.0

## 18.1.1

### Patch Changes

- .gitignore: - \*.js
- Updated dependencies [undefined]
  - @ctx-core/function@17.10.1

## 18.1.0

### Minor Changes

- dist,types directory: addressing typescript build issues

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.10.0

## 18.0.6

### Patch Changes

- types: ./src/index.d.ts: address error TS2742 issue
- Updated dependencies [undefined]
  - @ctx-core/function@17.9.3

## 18.0.5

### Patch Changes

- fix: \_be,\be\_,_rc_be,\_rc_b: directly defining return type to avoid error TS2742

## 18.0.4

### Patch Changes

- fix: \_rc_be,\_rc_b: \_val argument: this: \_val_this_T

## 18.0.3

### Patch Changes

- fix: \_be,\be\_,_rc_be,\_rc_b: \_val argument: return type set to Out

## 18.0.2

### Patch Changes

- fix: \_be,\be\_,_rc_be,\_rc_b: Out extends NonNullable<unknown> = NonNullable<Ctx[Key]>: more flexible type

## 18.0.1

### Patch Changes

- \_be,\be\_,_rc_be,\_rc_b: Out generic for return values

## 18.0.0

### Major Changes

- \_be,\be\_,_rc_be,\_rc_b: generic type is Ctx & keyof Ctx

## 17.6.2

### Patch Changes

- .npmignore: + ~
- Updated dependencies [undefined]
  - @ctx-core/function@17.9.2

## 17.6.1

### Patch Changes

- fix: target: 2018: nodejs compatability
- Updated dependencies [undefined]
  - @ctx-core/function@17.9.1

## 17.6.0

### Minor Changes

- "noImplicitAny": true

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.9.0

## 17.5.27

### Patch Changes

- type issues
- Updated dependencies [undefined]
  - @ctx-core/function@17.8.5

## 17.5.26

### Patch Changes

- update dependencies

## 17.5.25

### Patch Changes

- fix: type issues
- Updated dependencies [undefined]
  - @ctx-core/function@17.8.3

## 17.5.24

### Patch Changes

- update dependencies

## 17.5.23

### Patch Changes

- update dependencies

## 17.5.22

### Patch Changes

- update dependencies

## 17.5.21

### Patch Changes

- update dependencies

## 17.5.20

### Patch Changes

- update dependencies

## 17.5.19

### Patch Changes

- update dependencies

## 17.5.18

### Patch Changes

- update dependencies

## 17.5.17

### Patch Changes

- update dependencies

## 17.5.16

### Patch Changes

- fix: mixin: typescript strict compilation error

## 17.5.15

### Patch Changes

- mixin: implementation from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#copying_accessors

## 17.5.14

### Patch Changes

- fix: \_be,\_rc_be: strict type issues

## 17.5.13

### Patch Changes

- update dependencies

## 17.5.12

### Patch Changes

- update dependencies

## 17.5.11

### Patch Changes

- fix: \_rc_be: initializing ctx[rc_set_h_symbol]

## 17.5.10

### Patch Changes

- version bump

## 17.5.9

### Patch Changes

- fix: \_rc_be: onDestroy callbacks are invoked

## 17.5.8

### Patch Changes

- - Reflect.get

## 17.5.7

### Patch Changes

- update dependencies

## 17.5.6

### Patch Changes

- \_rc_be: onDestroy aliases on_destroy

## 17.5.5

### Patch Changes

- \_rc_be: register_destroy->on_destroy

## 17.5.4

### Patch Changes

- \_rc_be: push_unsubscribers->register_destroy

## 17.5.3

### Patch Changes

- \_rc_be: + this: \_val_this_T

## 17.5.2

### Patch Changes

- \_rc_be: returns a RcBe_return_T

## 17.5.1

### Patch Changes

- Rc_Be->RcBe,Rc_B->RcB

## 17.5.0

### Minor Changes

- \_rc_be: referencing counting be

## 17.4.4

### Patch Changes

- typescript: ^4.2.3 -> ^4.2.4
- Updated dependencies [undefined]
  - @ctx-core/function@17.4.5

## 17.4.3

### Patch Changes

- version bump
- Updated dependencies [undefined]
  - @ctx-core/function@17.4.4

## 17.4.2

### Patch Changes

- fix: npm publish: https://github.com/npm/cli/issues/2834
- Updated dependencies [undefined]
  - @ctx-core/function@17.4.3

## 17.4.1

### Patch Changes

- fix: npm run compile: tsc -b .
- Updated dependencies [undefined]
  - @ctx-core/function@17.4.2

## 17.4.0

### Minor Changes

- fix: Be<Output extends unknown = unknown, Ctx extends object = object>

## 17.3.1

### Patch Changes

- typescript: ^4.2.2 -> ^4.2.3
- Updated dependencies [undefined]
  - @ctx-core/function@17.4.1

## 17.3.0

### Minor Changes

- feat: extract

## 17.2.2

### Patch Changes

- \_extract: back to Record<keyof Type, true>

## 17.2.1

### Patch Changes

- version bump

## 17.2.0

### Minor Changes

- \_extract takes an array of keys of Type

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.4.0

## 17.1.0

### Minor Changes

- feat: \_extract: https://stackoverflow.com/a/50895613/142571

## 17.0.11

### Patch Changes

- version bump
- Updated dependencies [undefined]
  - @ctx-core/function@17.3.6

## 17.0.10

### Patch Changes

- fix: typescript build
- Updated dependencies [undefined]
  - @ctx-core/function@17.3.5

## 17.0.9

### Patch Changes

- typescript: ^4.1.5 -> ^4.2.2
- Updated dependencies [undefined]
  - @ctx-core/function@17.3.4

## 17.0.8

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.3.3

## 17.0.7

### Patch Changes

- pick_keys,unpick_keys: KEYS_OBJ extends object = object: generic
- fix: unpick: <I extends object = object>

## 17.0.6

### Patch Changes

- typescript: ^4.1.4 -> ^4.1.5
- Updated dependencies [undefined]
  - @ctx-core/function@17.3.2

## 17.0.5

### Patch Changes

- typescript: ^4.1.3 -> ^4.1.4
- Updated dependencies [undefined]
  - @ctx-core/function@17.3.1

## 17.0.4

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.3.0

## 17.0.3

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.2.0

## 17.0.2

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.1.0

## 17.0.1

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/function@17.0.1

## 17.0.0

### Major Changes

- src directory

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@17.0.0

## 16.1.1

### Patch Changes

- export alias: use as keyword

## 16.1.0

### Minor Changes

- export aliases

## 16.0.4

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.9.1

## 16.0.3

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.9.0

## 16.0.2

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.8.2

## 16.0.1

### Patch Changes

- Back to \_be<O, C> generic ordering: O is more often required to be defined than C

## 16.0.0

### Major Changes

- \_be: <C, O>: flipped generic arguments

### Minor Changes

- be_type<C extends object = object, O extends unknown = unknown> = (ctx:C, opts?:\be\_\_opts_T)=>O

## 15.0.16

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.8.1

## 15.0.15

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.8.0

## 15.0.14

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/function@16.7.0

## 15.0.13

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.6.1

## 15.0.12

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.6.0

## 15.0.11

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.5.0

## 15.0.10

### Patch Changes

- - .rush
- Updated dependencies [undefined]
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/function@16.4.0

## 15.0.9

### Patch Changes

- fix: \_be,\be\_: pending logic when key is not present in the ctx

  export pending_symbol

## 15.0.8

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.3.0

## 15.0.7

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.2.1

## 15.0.6

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.2.0

## 15.0.5

### Patch Changes

- fix: export alias type with "isolatedModules": true

## 15.0.4

### Patch Changes

- interface instead of type: ensure_refresh_obj_type,map_obj_fn_type,map_obj_obj_type
- using export as instead of export const
- Updated dependencies [undefined]
  - @ctx-core/function@16.1.5

## 15.0.3

### Patch Changes

- update native_isArray.d.ts

## 15.0.2

### Patch Changes

- typescript: ^4.1.2 -> ^4.1.3
- Updated dependencies [undefined]
  - @ctx-core/function@16.1.4

## 15.0.1

### Patch Changes

- fix: omit: implementation

## 15.0.0

### Major Changes

- \_be,\be\_: ctx is required

### Patch Changes

- fix: \be\_: generic types

## 14.0.0

### Major Changes

- \_be,\be\_: ctx is required

### Minor Changes

- \_be,\be\_: C generic type for ctx argument

## 13.1.0

### Minor Changes

- interface instead of type

## 13.0.3

### Patch Changes

- isArray.d.ts update

## 13.0.2

### Patch Changes

- typescript: ^4.0.5 -> ^4.1.2
- Updated dependencies [undefined]
  - @ctx-core/function@16.1.3

## 13.0.1

### Patch Changes

- typescript: ^4.0.3 -> ^4.0.5
- Updated dependencies [undefined]
  - @ctx-core/function@16.1.2

## 13.0.0

### Major Changes

- BREAKING CHANGE: assign: alias for Object.assign: remove generic

## 12.0.13

### Patch Changes

- fix: \_be,\be\_: nondeterministic build issues

## 12.0.12

### Patch Changes

- fix: \_be,\be\_: typescript errors

## 12.0.11

### Patch Changes

- fix: \_be,\be\_: setting ctx[key]

## 12.0.10

### Patch Changes

- fix: \_be,\be\_ return value

## 12.0.9

### Patch Changes

- fix: \_be,\be\_: \_val(ctx, key, opts?): ctx & key are always passed
- explicitly setting B types when \be\_ is invoked

## 12.0.8

### Patch Changes

- default generic types
- Updated dependencies [undefined]
  - @ctx-core/function@16.1.1

## 12.0.7

### Patch Changes

- fix: inferred type issue

## 12.0.6

### Patch Changes

- fix: more specific generics typing: I extends unknown

      _clear_ctx
      _clear_ctx
      _pick_value
      _pick_value_a1.d.ts
      _pick_value_a1.ts
      assign_fn_key_a1.d.ts
      assign_fn_key_a1.ts
      call_assign.d.ts
      call_assign.ts
      clone_assign_fn_key_a1.d.ts
      clone_assign_fn_key_a1.ts
      map_obj_andand.d.ts
      map_obj_andand.ts
      some.d.ts
      some.ts
      unpick.d.ts
      unpick.ts

## 12.0.5

### Patch Changes

- unpick_keys: <I extends unknown = unknown>

## 12.0.4

### Patch Changes

- fix: \_pick: pick<I extends object = object>

  fix: \_pick: typescript build

## 12.0.3

### Patch Changes

- stricter type checking of generics
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/function@16.1.0

## 12.0.2

### Patch Changes

- fix: \_be,\be\_: allow unknown type

## 12.0.1

### Patch Changes

- fix: install issues: using explicit workspace: versioning

## 12.0.0

### Major Changes

- Typescript strict checking

### Patch Changes

- Updated dependencies [undefined]
  - @ctx-core/function@16.0.0

## 11.0.1

### Patch Changes

- fix: npm run compile: path to tsc
- Updated dependencies [undefined]
  - @ctx-core/function@15.0.1

## 11.0.0

### Major Changes

- typescript types overhaul & extracting modules

### Patch Changes

- typescript updates
- Updated dependencies [undefined]
- Updated dependencies [undefined]
- Updated dependencies [undefined]
  - @ctx-core/function@15.0.0
