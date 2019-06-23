import React from 'react'

import * as Styled from './styles/Intros'

const Intros = ({ intros }) => (
  <section className="intros">
    <Styled.Row>
      <Styled.CarPreview src="/img/car.png" alt="Car" />
      <Styled.CarPreview src="/img/car.png" alt="Car" />
      <Styled.CarPreview src="/img/car.png" alt="Car" />
      <Styled.RowMessage background="#b7b7b7">
        {intros[0].message}
      </Styled.RowMessage>
    </Styled.Row>

    <Styled.Row>
      <Styled.CarPreview src="/img/car.png" alt="Car" />
      <Styled.CarPreview src="/img/car.png" alt="Car" />
      <Styled.RowMessage background="#363636">
        {intros[1].message}
      </Styled.RowMessage>
    </Styled.Row>

    <Styled.Row>
      <Styled.CarPreview src="/img/car.png" alt="Car" />
      <Styled.RowMessage background="#0066cc">
        {intros[2].message}
      </Styled.RowMessage>
    </Styled.Row>
  </section>
)

export default Intros
