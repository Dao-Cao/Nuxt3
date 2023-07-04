<template>
    <Menu>
        <el-main>
            <el-scrollbar>
                <el-table :data="tableData" style="width: 100%" height="680">
                    <el-table-column prop="coutry" label="国" width="140" />
                    <el-table-column prop="role" label="役割" width="140" />
                    <el-table-column prop="date" label="ID" width="140" />
                    <el-table-column prop="username" label="ユーザー姓名" width="140" />
                    <el-table-column prop="vfd" label="VFD" width="120" slot-scope="scope">
                        <template #default="scope">
                            <el-input v-model="scope.row.vfd" @blur="name(scope.row, 'vfd')" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="department" label="学科" width="120" slot-scope="scope">
                        <template #default="scope">
                            <el-input v-model="scope.row.department" @blur="name(scope.row, 'department')" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="coach" label="コーチ・審判" width="120" slot-scope="scope">
                        <template #default="scope">
                            <el-input v-model="scope.row.coach" @blur="name(scope.row, 'coach')" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </el-scrollbar>
        </el-main>
    </Menu>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { reactive, computed } from 'vue'
let items = [];
let page = ref(1);
let pageSize = ref(10);

for (let index = 0; index < 200; index++) {
    let item = {
        coutry: "Japan",
        role: "審判員",
        username: "SATT_李",
        date: '2016-05-02',
        vfd: "456" + index,
        department: "123456" + index,
        coach: '10.9' + index,
        address: 'No. 189, Grove St, Los Angeles',
    }
    items.push(item)

}
const pagedTableData = computed(() => {
    return tableData.slice(pageSize.value * page.value - pageSize.value, pageSize.value * page.value)
})

function setPage(val) {
    page.value = val
}
function name(params, item) {
    console.log(params)
    console.log(params[item])
    ElMessage({
        message: `修正後:${params[item]}、APIを呼んでDB更新`,
        type: 'success',
    })
    //alert(params[item])
}
// const item = {
//     coutry: "Japan",
//     role: "審判員",
//     username: "SATT_李",
//     date: '2016-05-02',
//     vfd: "456",
//     department: "123456",
//     coach: '99.9',
//     address: 'No. 189, Grove St, Los Angeles',
// }
// const tableData = ref(Array.from({ length: 200 }).fill(item))
const tableData = reactive(items)
</script>

<style lang="scss" scoped></style>