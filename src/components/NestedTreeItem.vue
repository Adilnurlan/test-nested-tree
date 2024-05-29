<template>
    <template v-for="item in nestedData" :key="item.id">
        <li>
            <div @click="item.toggle = !item.toggle" class="d-flex py-1 w-100" role="button"
                :style="{ 'padding-left': thisPadding + 'px' }">
                <i v-if="item.toggle && item.children.length" class="bi bi-caret-down"></i>
                <i v-if="!item.toggle && item.children.length" class="bi bi-caret-right"></i>
                <i v-if="!item.children.length" class="bi bi-dash"></i>
                <p class="ms-1" :class="{ 'fw-medium': item.parent_id === null }">
                    {{ item.title }}
                </p>
            </div>
        </li>
        <NestedTreeItem v-if="item?.children && item.toggle" :nestedData="item.children" :padding=nextPadding />
    </template>

</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    nestedData: Array,
    padding: Number
})

const thisPadding = ref(props.padding);
const nextPadding = computed(() => props.padding + 20);
</script>

<style scoped>
li:nth-child(odd) {
    background-color: #E4E4E8;
}
</style>