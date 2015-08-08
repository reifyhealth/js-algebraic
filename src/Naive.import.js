/*

Copyright 2015 Reify Health

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

 */

/*

Naive, untyped Javascript functions

 */

export
  {
  // DECIDABLE
    eq //: ∀ a . (a, a) -> Boolean

  // PREORDER
  , leq
  , indistinguishable
  , incomparable
  };

function eq(a, b) { return a === b; }
function leq(a, b) { return a <= b; }
function indistinguishable(a, b) { return leq(a, b) && leq(b, a); }
function incomparable(a, b) { return !(leq(a, b) || leq(b, a)); }
