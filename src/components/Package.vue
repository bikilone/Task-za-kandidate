<template>
  <div class="single-package">
    <div class="recommended" v-if="bundle.is_featured">Preporučujemo</div>
    <h4 class="package-name">{{bundle.name}}</h4>
    <div class="package-content">
      <div class="single-product single-product-tv">
        <div class="icon icon-tv"></div>
        <div class="specifications">
          <div class="section-item" v-for="product in bundle.included" :key="product.id">
            <div class="feature-list" v-if="product.product_category === 'tv'">
              <p
                v-if="product.attributes['tv-bold']"
                v-html="split(product, 'tv-bold')"
                class="text"
              ></p>
              <p v-else class="text">{{ product.long_name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="single-product single-product-net">
        <div class="icon icon-net"></div>
        <div class="specifications">
          <div class="section-item" v-for="product in bundle.included" :key="product.id">
            <div class="feature-list" v-if="product.product_category === 'net'">
              <p
                v-if="product.attributes['net-bold']"
                v-html="split(product, 'net-bold')"
                class="text"
              ></p>
              <p v-else class="text">{{ product.long_name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h4 class="package-price">
      <div class="price-wrap">
        <div class="prices">
          <!-- 24 -->
          <div class="single-contract-price" value="2899" v-if="contractLength === '24'">
            <p
              class="old-price"
              v-if="bundle.promotions[0].discount_variations[0] === 'Ugovor 24 meseca'"
            >
              <span
                class="item-val"
              >{{ parseInt(bundle.variation_price_recurring['Ugovor 24 meseca']) }}</span>
            </p>
            <span
              class="discount-price"
              v-if="bundle.promotions[0].discount_variations[0] === 'Ugovor 24 meseca'"
            >{{ parseInt(bundle.promotions[0].discount_value)}}</span>
            <span class="rsd">rsd/mes.</span>
            <span
              v-html="bundle.promotions[0].promo_text"
              v-if="bundle.promotions[0].discount_variations[0] === 'Ugovor 24 meseca'"
            ></span>
            <span
              v-else
              class="item-val"
            >{{ parseInt(bundle.variation_price_recurring['Ugovor 24 meseca']) }}</span>
          </div>
          <!-- 12 -->
          <div class="single-contract-price" value="2899" v-if="contractLength === '12'">
            <div v-if="bundle.promotions[0].discount_variations[0] === 'Ugovor 12 meseci'">
              <p class="old-price">
                <span
                  class="item-val"
                >{{ parseInt(bundle.variation_price_recurring['Ugovor 12 meseci']) }}</span>
              </p>
              <span class="discount-price">{{ parseInt(bundle.promotions[0].discount_value)}}</span>
              <span class="rsd">rsd/mes.</span>
              <span v-html="bundle.promotions[0].promo_text"></span>
            </div>
            <div v-else>
              <span
                class="item-val"
              >{{ parseInt(bundle.variation_price_recurring['Ugovor 12 meseci']) }}</span>
              <span class="rsd">rsd/mes.</span>
            </div>
          </div>

          <!-- bez ug. ob. -->
          <div
            class="single-contract-price"
            value="2899"
            v-if="contractLength === 'Bez ugovorne obaveze'"
          >
            <div v-if="bundle.promotions[0].discount_variations[0] === 'Bez ugovorne obaveze'">
              <p class="old-price">
                <span
                  class="item-val"
                >{{ parseInt(bundle.variation_price_recurring['Bez ugovorne obaveze']) }}</span>
              </p>
              <span class="discount-price">{{ parseInt(bundle.promotions[0].discount_value)}}</span>
              <span class="rsd">rsd/mes.</span>
              <span v-html="bundle.promotions[0].promo_text"></span>
            </div>
            <div v-else>
              <span
                class="item-val"
              >{{ parseInt(bundle.variation_price_recurring['Bez ugovorne obaveze']) }}</span>
              <span class="rsd">rsd/mes.</span>
            </div>
          </div>
        </div>
      </div>
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    bundle: null,
    contractLength: null
  },
  mounted() {
    console.log(this.bundle);
  },
  methods: {
    split(product, att) {
      const attributeValue = product.attributes[att][0].attribute_value;
      const splited = product.long_name.split(
        product.attributes[att][0].attribute_value
      );
      const joined = `<p>${splited[0]} <strong>${attributeValue}</strong> ${splited[1]}</p>`;
      return joined;
    }
  }
};
</script>

<style lang="scss">
.single-package {
  background-color: #f3f3f4;
  max-width: 390px;
  min-width: 340px;
  margin: 0px 15px;
  background-color: #f3f3f4;
  border-radius: 40px;
  padding: 15px 30px 30px 30px;
}
.package-name {
  font-size: 48px;
  font-family: "Calps", sans-serif;
  line-height: 1.15;
  font-style: italic;
  background: linear-gradient(to right, #de0065, #e4032e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1.2px;
  font-weight: 700;
  text-align: center;
  padding: 18px 0px 3px 0px;
}

.vertical-packages .single-product {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 50px;
}
.icon {
  background-repeat: no-repeat;
  background-size: contain;
  height: 50px;
  width: 50px;
  &-tv {
    background-image: url("../assets/tv.png");
  }
  &-net {
    background-image: url("../assets/wifi.png");
  }
  &-tel {
    background-image: url("../assets/phone.png");
  }
}
.specifications {
  padding-left: 20px;
}
.text {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  line-height: 21px;
}

.single-product {
  margin-top: 20px;
}
.package-price {
  font-size: 48px;
  font-family: "Calps", sans-serif;
  font-weight: 700;
  line-height: 1.15;
  color: #de0065;
  text-align: center;
  font-style: italic;
  margin-top: 50px;
  margin-bottom: 20px;
}
.old-price {
  position: relative;
  display: inline-block;
  ::before {
    position: absolute;
    content: "";
    left: 0;
    top: 55%;
    right: 0;
    border-top: 1px solid #000 !important;
    border-color: inherit;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
.selected-price {
  font-size: 24px;
}
.monthly {
  font-size: 18px;
}
.current-price {
  display: inline-block;
}

.price-note {
  font-size: 16px;
}
.recommended {
  font-size: 16px;
  padding-bottom: 10px;
  line-height: 1.19;
  color: #de0065;
  font-style: italic;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid #dddddd;
}
.single-contract-price {
  font-size: 20px;
}
.rsd {
  margin-left: 10px;
}
.discount-price {
  font-size: 40px;
  margin-left: 10px;
}
</style>