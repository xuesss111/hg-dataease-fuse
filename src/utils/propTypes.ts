import type { VueTypesInterface, VueTypeValidableDef } from 'vue-types'
import { createTypes, toType } from 'vue-types'


// 自定义扩展vue-types
type PropTypes = VueTypesInterface & {
  readonly style: VueTypeValidableDef<any>
}

const ProjectTypes = createTypes({
  func: undefined,
  bool: undefined,
  string: undefined,
  number: undefined,
  object: undefined,
  integer: undefined
}) as PropTypes

class propTypes extends ProjectTypes {
  style() {
    return toType('style', {
      type: [String, Object],
      default: undefined
    })
  }
}

export { propTypes }
