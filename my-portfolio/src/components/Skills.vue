<template>
    <!-- Skills Section -->
    <section id="skills" class="skills-section py-5 bg-dark">
        <div class="container">
            <h2 class="text-center">Habilidades</h2>
            <div class="row">
                <div class="col-md-4" v-for="({title, percentage}, index) in skills" :key="index">
                    <h4>{{ title }}</h4>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" :style="{ width: `${percentage}%` }">{{ percentage }}%</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "SkillsSection",
    data() {
        return {
            skills: [
                { title: 'HTML', percentage: 90 },
                { title: 'CSS', percentage: 80 },
                { title: 'JavaScript', percentage: 75 },
            ]
        }
    }
}
</script>
