<template>
    <div class="bg-white text-dark">
        <aside>
            <h3>ASIDE</h3>
        </aside>
        <header>
            <h3>HEADER</h3>
        </header>
        <div class="content d-flex">
            <div class="list">
                <h3 class="bg-light d-inline-flex">MAINCONTENT</h3>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STATUS</th>
                            <th scope="col">NAME</th>
                        </tr>
                    </thead>
                    <tbody v-for="(item,key) in list" :key="key">
                        <tr @click="addNum(key + 1, list[key])" v-bind="doubleClickEvent('isShow')">
                            <th scope="row">{{ item.id }}</th>
                            <td>{{ item.name }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="canvas">
                <button class="btn btn-primary" type="button" @click="changeShow('isShow')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                    </svg>
                </button>
            </div>
            <div class="canvas-content" v-if="isShow">
                <h4>Name #3</h4>
                <p>目前資料總共 {{ this.uniqueArray.length }} 筆</p>

                <div class="cardSection" v-for="(item, index) in uniqueArray" :key="index">
                    <div class="card">
                        <img :src="this.uniqueArray[index].imgUrl" class="card-img-top" alt="圖片" />
                        <div class="card-body">
                            <h5 class="card-title">{{ this.uniqueArray[index].name }}</h5>
                            <a href="#" class="btn btn-danger" @click="clear(item.id)">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- canvas-modal -->
            <!-- <div
                class="offcanvas offcanvas-end"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button
                        type="button"
                        class="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body">...</div>
            </div>-->
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            list: [
                {
                    id: "1",
                    name: "NAME #1",
                    status: "false",
                    imgUrl: "https://picsum.photos/id/1001/200/300"
                },
                {
                    id: "2",
                    name: "NAME #2",
                    status: "true",
                    imgUrl: "https://picsum.photos/id/1002/200/300"
                },
                {
                    id: "3",
                    name: "NAME #3",
                    status: "true",
                    imgUrl: "https://picsum.photos/id/1003/200/300"
                },
                {
                    id: "4",
                    name: "NAME #4",
                    status: "false",
                    imgUrl: "https://picsum.photos/id/1004/200/300"
                },
                {
                    id: "5",
                    name: "NAME #5",
                    status: "true",
                    imgUrl: "https://picsum.photos/id/1005/200/300"

                },
                {
                    id: "6",
                    name: "NAME #6",
                    status: "true",
                    imgUrl: "https://picsum.photos/id/1006/200/300"

                },
                {
                    id: "7",
                    name: "NAME #7",
                    status: "true",
                    imgUrl: "https://picsum.photos/id/1012/200/300"

                },
                {
                    id: "8",
                    name: "NAME #8",
                    status: "false",
                    imgUrl: "https://picsum.photos/id/1008/200/300"

                },
                {
                    id: "9",
                    name: "NAME #9",
                    status: "false",
                    imgUrl: "https://picsum.photos/id/1009/200/300"

                },
                {
                    id: "10",
                    name: "NAME #10",
                    status: "true",
                    imgUrl: "https://picsum.photos/id/1010/200/300"
                },

            ],
            isShow: false,
            uniqueArray: [],
            selectedList: [],
            selectedItem: {}
        }
    },
    methods: {
        changeShow(key) {
            this[key] = !this[key]
        },
        addNum(col, value) {
            // console.log('觸發 addNum', col, value)
            this.selectedItem = value;
            // console.table(this.selectedItem)
            this.selectedList.push(this.selectedItem);
            const arrToSet = new Set(this.selectedList)
            this.uniqueArray = [...arrToSet]
            console.log(this.uniqueArray)
            // console.log(this.selectedList)
        },
        clear(col) {
            // console.log(col)
            this.selectedList = this.selectedList.filter(item => {
                return item.id !== col
            })
        },
        doubleClickEvent(key) {
            document.addEventListener('dblclick', this.changeShow(key))
        }
    },
}
</script>

<style lang="scss" scoped>
.content {
    background-color: #fff;
    color: #000;
    margin-left: 120px;
    margin-top: 80px;
    padding: 40px 0 40px 40px;
    height: 100vh;
    height: 100%;
    border: 5px solid hsla(160, 100%, 37%, 1);

    .list {
        width: 100%;
        .table {
            tr {
                &:hover {
                    background-color: #aaa;
                }
            }
        }
    }
    .canvas {
        margin-top: -20px;
    }
    .canvas-content {
        width: 200px;
        height: 100%;
        margin-top: -40px;
        border: 5px solid hsla(160, 100%, 37%, 1);
        transition: transform 0.3s ease-in-out;

        .cardSection {
            .card {
                margin: 10px;
            }
        }
    }
}

aside {
    background-color: #fff;
    width: 120px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    //
    color: #aaa;
    font-size: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    writing-mode: vertical-rl;
    border: 5px solid hsla(160, 100%, 37%, 1);
    z-index: 2;
}
header {
    width: calc(100% - 120px);
    margin-left: 120px;
    height: 80px;
    border: 5px solid hsla(160, 100%, 37%, 1);
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: #fff;
    h3 {
        text-align: center;
        line-height: 64px;
    }
}
</style>