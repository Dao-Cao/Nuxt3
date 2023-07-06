<template>
    <Menu>
        <el-main>
            <div class="p-3">
                <el-button type="success" plain><nuxt-link to="/report.png" target="_blank">インポート</Nuxt-link></el-button>
            </div>
            <el-scrollbar>
                <el-table :data="tableData" style="width: 100%;height: 550px;">
                    <el-table-column prop="coutry" label="国" width="140" />
                    <el-table-column prop="role" label="役割" width="140" />
                    <el-table-column prop="id" label="ID" width="140" />  
                    <el-table-column prop="username" label="ユーザー姓名" width="140" />
                    <el-table-column prop="vfd" label="VFD" width="120" slot-scope="scope">
                    </el-table-column>
                    <el-table-column prop="department" label="学科" width="120" slot-scope="scope">
                    </el-table-column>
                    <el-table-column prop="coach" label="コーチ・審判" width="120" slot-scope="scope">
                    </el-table-column>
                    <el-table-column prop="address" label="Address" />
                </el-table>
            </el-scrollbar>
        </el-main>
    </Menu>
</template>

<script setup>
let items = []
for (let index = 0; index < 100; index++) {
    let item = {
        id:"test00"+ index,
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

const tableData = reactive(items)
</script>

<style lang="scss" scoped></style>