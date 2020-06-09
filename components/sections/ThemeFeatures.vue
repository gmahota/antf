<template>
  <base-section id="theme-features">
    <base-section-heading title="Microbanco Confiança, SA">
      Um resumo de quem somos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',
    data: () => ({
      features: [
        {
          title: 'Eficacia',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Acompanhamento',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'FORUM ANTF JÚRICO',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Woring With People',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'Credito',
          icon: 'mdi-ice-pop',
        },
        {
          title: 'Recuperação Credito',
          icon: 'mdi-help-circle-outline',
        },
      ],
    }),
  }
</script>
