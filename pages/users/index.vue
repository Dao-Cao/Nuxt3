<template>
    <Menu>
        <el-main>
            <div class="p-3">
                <!-- <el-button type="success" plain><nuxt-link to="/report.png" target="_blank">インポート</Nuxt-link></el-button> -->
                <el-upload class="w-96" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple
                    :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :show-file-list="false"
                    :on-exceed="handleExceed">
                    <el-button type="success" plain>インポート</el-button>
                </el-upload>
            </div>  
            <el-scrollbar>
                <el-table :data="tableData" style="width: 100%;height: 550px;">
                    <el-table-column prop="coutry" label="国"  slot-scope="scope" >
                    <template #default="scope">
                            <el-input v-model="scope.row.coutry" @blur="name(scope.row, 'coutry')" />
                        </template>
                    </el-table-column>   
                    <el-table-column prop="role" label="役割" >
                    <template #default="scope">
                            <el-input v-model="scope.row.role" @blur="name(scope.row, 'role')" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="id" label="ID" sortable />
                    <el-table-column prop="username" label="ユーザー姓名" />
                    <!-- <el-table-column prop="vfd" label="VFD" width="120" slot-scope="scope">
                    </el-table-column>
                    <el-table-column prop="department" label="学科" slot-scope="scope">
                    </el-table-column>
                    <el-table-column prop="coach" label="コーチ・審判" slot-scope="scope">
                    </el-table-column>
                    <el-table-column prop="address" label="Address" /> -->
                </el-table>
            </el-scrollbar>
        </el-main>
    </Menu>
</template>

<script setup>
import { ElMessage } from 'element-plus';

const { $show, $hide } = useNuxtApp();

function name(params, item) {
    console.log(params)
    console.log(params[item])
    ElMessage({
        message: `修正後:${params[item]}、APIを呼んでDB更新`,
        type: 'success',
    })
}
function showLoad(params) {
    $show();
    setTimeout(() => {
        $hide()
    }, 2000);
}


let items = []
for (let index = 0; index < 100; index++) {
    let item = {
        id: "test00" + index,
        coutry: "Japan",
        role: "審判員"+ index,
        username: "SATT_李"+ index,
        date: '2016-05-02',
        vfd: "456" + index,
        department: "123456" + index,
        coach: '10.9' + index,
        address: 'No. 189, Grove St, Los Angeles',
    }
    items.push(item)

}

const tableData = reactive(items)


</script>

<style lang="scss" scoped></style>