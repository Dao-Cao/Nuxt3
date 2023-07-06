<template>
    <Menu>
        <el-main>
            <div>「調整」セルは編集可能です。</div>
            <el-scrollbar>
                <el-table :data="tableData" style="width: 100%" height="550px">
                    <el-table-column prop="coutry" label="国" />
                    <el-table-column prop="vfdA" label="競技者A VFD" width="140" />
                    <el-table-column prop="vfdA1" label="競技者A 学科" width="140" />
                    <el-table-column prop="vfdB" label="競技者B VFD" width="140" />
                    <el-table-column prop="vfdB1" label="競技者B 学科" width="140" />
                    <el-table-column prop="vfdC" label="審査員A 審査結果" width="140" />
                    <el-table-column prop="vfdC1" label="審査員B 審査結果" width="140" />
                    <el-table-column prop="total" label="合計" width="120" slot-scope="scope" sortable>
                    </el-table-column>
                    <el-table-column prop="department" label="調整" width="120" slot-scope="scope" sortable>
                        <template #default="scope">
                            <el-input v-model="scope.row.department" @blur="name(scope.row, 'department')" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="coach" label="最終合計" width="120" slot-scope="scope" sortable>
                    </el-table-column>
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
    // let item = {
    //     coutry: index + "Japan",
    //     role: "審判員",
    //     username: "SATT_李",
    //     date: '2016-05-02',
    //     vfd: "456" + index,
    //     department: "123456" + index,
    //     coach: '10.9' + index,
    //     address: 'No. 189, Grove St, Los Angeles',
    // }
    let item = {
        coutry: "Japan" + "_SATT李"+ index ,
        role: "審判員",
        username: "SATT_李",
        vfdA: "10" + index,
        vfdA1: "20" + index,
        vfdB: "30" + index,
        vfdB1: "30" + index,
        vfdC: "40" + index,
        vfdC1: "50" + index,
        total: "100" + index,
        department: "123456" + index,
        coach: '10.9' + index,
    }
    items.push(item)

}
function name(params, item) {
    console.log(params)
    console.log(params[item])
    ElMessage({
        message: `修正後:${params[item]}、APIを呼んでDB更新`,
        type: 'success',
    })
}
const tableData = reactive(items)
</script>

<style  >
.el-main{
    overflow: hidden;
}
</style>