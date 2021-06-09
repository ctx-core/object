# @ctx-core/object

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
