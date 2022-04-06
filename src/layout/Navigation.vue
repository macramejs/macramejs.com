<template>
    <nav class="text-white pt-20">
        <div class="mb-6">
            <h3>Headline</h3>
            <ul>
                <li class="active">
                    <a href="#">Macrame</a>
                    <ul>
                        <li>
                            <router-link
                                to="/docs/macrame/indexes"
                                class="active"
                            >
                                Indexes
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/docs/macrame/forms"
                                class="active"
                            >
                                Forms
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/docs/macrame/trees"
                                class="active"
                            >
                                Trees
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/docs/macrame/translatable"
                                class="active"
                            >
                                Tanslatable
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                to="/docs/macrame/save-queue"
                                class="active"
                            >
                                Save Queue
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="mb-6">
            <h3>Other</h3>
            <ul>
                <li>
                    <a href="/docs/other/development">Development</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
