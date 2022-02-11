<template>
  <div>
    <section class="banner-head">
      <div class="overlay"></div>
      <div class="image-overlay">
        <img src="https://wallpaperaccess.com/full/1567666.png" />
      </div>
      <div class="content-text">
        <h1>Cryptocurrency Xchange Rate</h1>
        <p>Check live foreign currency exchange rates</p>
        <div class="container mt-4">
          <div class="box">
            <div class="field is-grouped">
              <div class="field-label is-normal">
                <label class="label">From</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-normal is-info"
                      type="text"
                      placeholder="Small sized input"
                      readonly
                      v-model="from"
                    />
                  </div>
                </div>
              </div>

              <div class="field-label is-normal">
                <label class="label">To</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-normal is-info"
                      type="text"
                      placeholder="Small sized input"
                      readonly
                      v-model="to"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="is-hidden-desktop mt-5">
      <div class="container">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title mobile-card-header">
              US Dollar to Bitcoin Rate
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p style="font-weight: bolder">
                1 BTC: <span style="font-weight: 400">USD {{ price }}</span>
              </p>
              <p style="font-weight: bolder">
                Ask Price:
                <span style="color: green; font-weight: 400">{{ bid }}</span>
              </p>
              <p style="font-weight: bolder">
                Bid Price:
                <span style="color: red; font-weight: 400">{{ bid }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="is-hidden-touch mt-5">
      <div class="container">
        <div class="columns is-gapless">
          <div class="column column-customize-1">Currency</div>
          <div class="column column-customize-2">Amount</div>
          <div class="column column-customize-3">Bid Price</div>
          <div class="column column-customize-4">Ask Price</div>
        </div>
        <div class="columns is-gapless column-customize">
          <div class="column">BTC/USD</div>
          <div class="column">${{ price }}</div>
          <div class="column" style="color: green">{{ bid }}</div>
          <div class="column" style="color: red">{{ ask }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "HomeView",
  data() {
    return {
      from: "USD",
      to: "BTC",
    };
  },
  computed: {
    ...mapState(["price", "ask", "bid"]),
  },
  mounted() {
    this.interval = setInterval(() => {
      this.updateXchange();
    }, 20000);
    this.updateXchange();
    document.title = "Lotrox - Cryptocurrency Exchange Rates";
  },
  unmounted() {
    clearInterval(this.interval);
  },
  methods: {
    updateXchange() {
      let call = {
        from: this.from,
        to: this.to,
      };
      this.$store.dispatch("GET_XCHANGE", call);
    },
  },
};
</script>
