<template>
    <div class="d-flex justify-content-center">
        <div class="card rounded-0 py-3">
            <ul>
                <NestedTreeItem :nestedData="parentList" :padding="nextPadding" />
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NestedTreeItem from '@/components/NestedTreeItem.vue';
import axios from 'axios';

const parentList = ref([]);
const nextPadding = 0;

const buildTree = (array) => {
    const nodeMap = {};
    const result = [];

    array.forEach(item => {
        nodeMap[item.id] = { ...item, children: [], toggle: false };
    });

    array.forEach(item => {
        const node = nodeMap[item.id];
        if (item.parent_id !== null) {
            nodeMap[item.parent_id].children.push(node);
        } else {
            result.push(node);
        }
    });
    console.log(result)
    return result;
}

onMounted(async () => {
    const data = await axios.get('/items').then((res) => {
        return res.data
    }).catch((err) => { console.log(err) })
    const copyData = JSON.parse(JSON.stringify(data));
    parentList.value = buildTree(copyData);
})
</script>

<style scoped>
.card {
    min-width: 500px;
    min-height: 100vh;
}
</style>