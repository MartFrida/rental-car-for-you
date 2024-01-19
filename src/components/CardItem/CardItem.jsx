const CardItem = () => {
  return (
    <div>
      <img className='' src='https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg' alt='/buick_enclave' loading="lazy" />
      <div>
        <p>make <span>model, </span>year</p>
        <p>rentalPrice</p>
      </div>
      <div>
        <p>city | country | rentalCompany | Premium</p>
        <p>type | model | id | functionalities</p>
      </div>
      <button>Learn more</button>
    </div>
  )
}

export default CardItem