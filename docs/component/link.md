<script setup>
import DULink from '../../packages/components/link/src/Index.vue'
</script>

# Link 链接

### 类型
<br />

<DULink type="primary">Primary</DULink>
<DULink type="success">Success</DULink>
<DULink type="info">Info</DULink>
<DULink type="warning">Warning</DULink>
<DULink type="danger">Danger</DULink>
```vue
<DULink type="primary">Primary</DULink>
<DULink type="success">Success</DULink>
<DULink type="info">Info</DULink>
<DULink type="warning">Warning</DULink>
<DULink type="danger">Danger</DULink>
```

### 禁用
<br />

<DULink type="primary" disabled>Primary</DULink>
<DULink type="success" disabled>Success</DULink>
<DULink type="info" disabled>Info</DULink>
<DULink type="warning" disabled>Warning</DULink>
<DULink type="danger" disabled>Danger</DULink>
```vue
<DULink type="primary" disabled>Primary</DULink>
<DULink type="success" disabled>Success</DULink>
<DULink type="info" disabled>Info</DULink>
<DULink type="warning" disabled>Warning</DULink>
<DULink type="danger" disabled>Danger</DULink>
```

### 下划线
<br />

<DULink>With Underline</DULink>
<DULink :underline="false">Without Underline</DULink>
```vue
<DULink>With Underline</DULink>
<DULink :underline="false">Without Underline</DULink>
```

### Link 属性
<br />

| 属性 | 说明 | 类型 | 默认值 |
|:-----|:----|:-----|:-------|
| type | 类型 | 'primary' &#124; 'success' &#124; 'info' &#124; 'warning' &#124; 'danger' | 'primary' |
| disabled | 是否禁用 | boolean | false |
| underline | 是否有下划线 | boolean | true |
| href | 原生 href 属性 | string | - |
