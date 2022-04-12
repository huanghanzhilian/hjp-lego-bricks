<template>
  <div :style="styleProps" 
       class="l-shape-component" 
       @click.prevent="handleClick" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { transformToComponentProps, shapeDefaultProps, shapeStylePropNames } from '@/defaultProps'
import useComponentCommon from '@/hooks/useComponentCommon'

const defaultProps = transformToComponentProps(shapeDefaultProps)

export default defineComponent({
  name: 'l-shape',
  props: {
    ...defaultProps
  },
  setup (props) {
    const { styleProps, handleClick } = useComponentCommon(props, shapeStylePropNames)
    return {
       styleProps,
       handleClick
    }
  }
})
</script>
