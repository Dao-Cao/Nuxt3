<template>
    <Menu>
        <div class="p-3">
            <el-upload v-model:file-list="fileList" class="w-96"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple :on-preview="handlePreview"
                :on-remove="handleRemove" :before-remove="beforeRemove" :limit="3" :on-exceed="handleExceed" :show-file-list="false">
                <el-button type="success" plain>実技学科 採点データ</el-button>
                <template #tip>
                    <div class="el-upload__tip w-96">
                        jpg/png/csv アップロードできる各ファイルのサイズはXXMBまでです。
                    </div>
                </template>
            </el-upload>
        </div>
    </Menu>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
    ElMessageBox.prompt('Please input your e-mail', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputPattern:
            /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email',
    })
        .then(({ value }) => {
            ElMessage({
                type: 'success',
                message: `Your email is:${value}`,
            })
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: 'Input canceled',
            })
        })
}

const fileList = ref([
    // {
    //     name: 'element-plus-logo.svg',
    //     url: 'https://element-plus.org/images/element-plus-logo.svg',
    // },
    // {
    //     name: 'element-plus-logo2.svg',
    //     url: 'https://element-plus.org/images/element-plus-logo.svg',
    // },
])
const handleRemove = (file, uploadFiles) => {
    console.log(file, uploadFiles)
}

const handlePreview = (uploadFile) => {
    console.log(uploadFile)
}

const handleExceed = (files, uploadFiles) => {
    ElMessage.warning(
        `The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length
        } totally`
    )
}

const beforeRemove = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(
        `Cancel the transfer of ${uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}
</script>

<style lang="scss" scoped></style>