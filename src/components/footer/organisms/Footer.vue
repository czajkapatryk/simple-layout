<template>
  <section class="c-footer">
    <div class="c-footer__container">
      <h1>How can I win?</h1>
      <span
        >Thanks to your membership, you also participate in our contest to win
        the iPhone15. We sellect a winner among every 600 participants. The next
        winner will be selected on 06.10.2023, and will be notified directly by
        e-mail. If the reward is out of stock, the winner will receive a similar
        product of equal or greater value instead.</span
      >
    </div>
    <div class="c-footer__container">
      <h1>No hidden fees?</h1>
      <span
        >We ensure that our members are provided with a detailed history of
        transactions so that they know exactly what they are paying for. Credit
        card information is only required to facilitate future purchases. There
        will be no charges on your credit card statement if you do not upgrade
        to PREMIUM membership and do not make a purchase.</span
      >
    </div>
    <div class="c-footer__container">
      <h1>Why do we need your billing information?</h1>
      <span
        >By joining this service, you will receive a 5-day trial of our
        partner's program. If you continue with a subscription beyond the 5-day
        trial period, you will be charged an amount on your credit card which
        varies depending on the choice of the tariff. When your contribution is
        deducted from your credit card or other payment method, you will have
        access to these services which are reserved exclusively for members of
        our partner's website.</span
      >
    </div>
  </section>
  <section class="c-footer__payment-section">
    <span>We accept the following credit cards</span>
    <img
      alt="Credit Cards"
      src="/footer_cards.png"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style>
.c-footer {
  display: flex;
  flex-direction: row;
  gap: var(--gap--xl);
  background: var(--lt-muted);
  padding: var(--padding-xl) var(--padding);
  margin-bottom: var(--margin);
}

.c-footer__container {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: var(--gap--xxxs);
}

.c-footer__container h1 {
  font-size: var(--font_size--xxxs);
  color: var(--primary);
}

.c-footer__container span {
  font-size: var(--font_size--xxxxs);
  line-height: 1rem;
}

.c-footer__payment-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: var(--gap--xxxs);
}

.c-footer__payment-section span {
  font-size: var(--font_size--xxxs);
}

@media all and (max-width: 1600px) {
  .c-footer {
    flex-direction: column;
  }
}
</style>
