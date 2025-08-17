'use client'

import Link from 'next/link'
import Button from '../_components/Button'
import { notify } from '../_components/Toast'
import PageContainer from '../_components/PageContainer'

export default function home() {
  return (
    <PageContainer className="py-20">
      HOME
      <div className="relative inline-block overflow-hidden rounded">
        <Button
          onClick={() =>
            notify(
              'info',
              <div className="flex flex-col">
                <span>홈페이지입니다.</span>
                <span>하하하하</span>
              </div>,
            )
          }
        >
          토스트 확인
        </Button>

        <Button type="primary">버튼</Button>
        <Button type="dashed">버튼</Button>
        <Button type="text">버튼</Button>
        <Button disabled>버튼</Button>
        <Button disabled type="primary">
          버튼
        </Button>
        <Button disabled type="dashed">
          버튼
        </Button>
        <Button disabled type="text">
          버튼
        </Button>
      </div>
      <div>
        <Link href="/login">로그인페이지</Link>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti
        maiores harum soluta saepe esse exercitationem, cumque nemo animi vitae
        neque! Adipisci dolores ratione ipsum suscipit iste dolorem sit
        repellat. Corrupti atque commodi earum ut id magnam quo. Officia
        consequatur enim, consequuntur expedita iusto accusantium iste accusamus
        officiis suscipit amet natus eaque deleniti laborum voluptatum
        voluptatem libero! Possimus, sunt quam? Ex ipsum voluptate, labore
        corrupti ea at soluta quisquam nam velit sequi odit, nihil, quidem
        placeat non dolorum porro similique! Laborum ipsa suscipit inventore sed
        debitis, odio assumenda consequatur eveniet. Consequatur maiores commodi
        sint pariatur eos, minus qui officia molestiae facilis corrupti error
        neque iusto libero tempora aut distinctio obcaecati provident, culpa
        facere! Dolores commodi, accusantium neque porro sequi quas! Deserunt,
        vitae ullam! Debitis provident omnis veniam magni blanditiis, quo vero
        sint quos cumque libero maiores consequatur corrupti, voluptatem animi
        vitae ullam nobis aperiam dolor ipsum error rem pariatur. Repellendus?
        Soluta excepturi optio quis, voluptatum quam sit delectus fugiat iste
        officiis magni placeat. Facere esse animi tempora non debitis quae
        explicabo vel repudiandae quas accusantium? Voluptatem reiciendis
        asperiores unde. Veritatis! Animi nihil hic cum accusamus, atque
        accusantium velit temporibus, veritatis explicabo quas blanditiis sit
        itaque ad laborum? Accusamus unde soluta nihil libero? Quae repudiandae
        cumque doloremque impedit ut quos praesentium? Nam libero quod
        reiciendis dicta at, eligendi minus pariatur sequi quisquam suscipit
        culpa necessitatibus veniam fugit, aperiam debitis! Voluptate doloribus
        blanditiis, fugit facilis quidem ad ab veritatis accusantium nihil
        incidunt? Ducimus sapiente ipsam atque, illum nihil porro itaque!
        Exercitationem quaerat quod architecto. Adipisci sit neque, recusandae
        similique placeat sunt, in blanditiis pariatur amet enim tempora,
        eveniet dolorem quam esse ex. Temporibus beatae ipsa excepturi vero
        eveniet voluptas, delectus voluptates omnis magnam tenetur velit
        doloremque officia aspernatur recusandae, ea adipisci neque dolores,
        eius pariatur animi quas? Deserunt minima ducimus cupiditate
        consectetur. Magni nostrum quam aliquam sint, mollitia officiis voluptas
        dignissimos culpa neque ex quis placeat dolores reprehenderit quo
        delectus harum deserunt, tenetur nihil adipisci sunt. Ducimus voluptatum
        blanditiis asperiores molestiae eligendi. Quaerat impedit autem animi
        amet illo, aspernatur sed blanditiis accusantium provident eligendi
        voluptatum fugiat placeat ratione. Fugit, quis! Assumenda adipisci,
        totam fuga aut nihil incidunt ducimus fugiat officiis ipsum vel! Quod
        temporibus iure voluptas in consectetur reiciendis nihil illo eveniet
        inventore eaque quos laudantium mollitia cumque magnam, officiis
        perspiciatis eum, id commodi aut porro. Mollitia rerum numquam fugiat
        amet similique! Earum ea labore delectus voluptatum facilis aperiam
        aspernatur dolores consequatur cumque et voluptas laboriosam, illum
        reiciendis nemo tenetur tempora repudiandae, officia nam ipsum, eaque
        est? Earum, esse impedit! Architecto, atque! Cumque iure labore magni
        pariatur modi. Nemo, laboriosam. Quae tempore nisi dicta ex voluptate
        sint, maiores id. Nulla esse odit illum, alias reprehenderit dolorum
        exercitationem assumenda libero corporis, dolores ipsum. Nisi est
        deleniti repellendus ea voluptatem fugiat impedit doloribus! Tempore
        laborum molestiae aut molestias dolor neque sapiente ipsam corrupti
        perferendis modi, culpa ut sequi beatae labore, nobis, quae minima
        architecto. Qui consectetur ipsum inventore nesciunt excepturi
        voluptatibus corrupti saepe, ullam, doloribus eius, nemo eos quam omnis
        sapiente tempore eum perferendis tenetur mollitia voluptates voluptate
        dicta fugiat architecto. Ipsa, aliquam totam! Molestias a natus mollitia
        fuga dicta placeat, explicabo, minima veniam dolore modi iste id.
        Laboriosam vero numquam iste harum repellat. Quam sequi, natus modi
        dolore ex aspernatur ullam quia molestias? Modi velit totam ipsa,
        repellendus earum deserunt dignissimos veniam! Modi, necessitatibus?
        Eius libero, corrupti odit est, id deserunt dicta dignissimos aperiam
        aspernatur sunt sed in? Ipsam, deleniti. Facere, dolorum ipsum? Alias,
        voluptas! Magnam quasi dolore labore ipsam quo, ad odio obcaecati
        perspiciatis quidem fugit esse dolorem magni est distinctio qui expedita
        dolor repellat consequuntur porro assumenda inventore voluptatibus
        optio? Labore. Incidunt nisi laborum quibusdam reiciendis temporibus
        aliquid voluptas, veniam molestias! Reprehenderit hic et ipsa
        blanditiis, quam ex cumque aliquid id quibusdam labore fuga explicabo
        amet voluptatum ipsum facere numquam ab? Molestiae iste nam voluptate
        cum inventore quia ipsa veritatis optio, obcaecati, laudantium velit
        corrupti, sapiente ut incidunt? Tempora cumque, eaque, eum illum
        necessitatibus sed adipisci voluptatibus deserunt a minima labore!
        Aperiam nam libero commodi est, repellat non laboriosam quis et
        voluptates perspiciatis nisi incidunt nobis labore vero hic magnam
        officia molestias possimus fugiat in exercitationem quisquam aliquam?
        Minima, dicta reprehenderit. Architecto animi repellat doloremque qui
        corporis modi deleniti dignissimos nisi sint temporibus, dolores aperiam
        voluptatem sed sit nobis totam debitis culpa distinctio quasi voluptates
        voluptatibus laudantium eveniet ab nesciunt. Natus. Voluptatibus
        doloribus necessitatibus vel iste aperiam doloremque, quas deserunt hic
        nesciunt dolor. Quaerat eum maiores tempore perferendis nulla, nesciunt
        dolore reiciendis veritatis praesentium perspiciatis ipsa incidunt nam
        beatae et dolorem! Aliquam voluptatibus itaque veniam adipisci molestiae
        voluptatum rerum! A, eveniet voluptatum aspernatur facere ad eos vero
        praesentium! Excepturi consequuntur fuga nemo obcaecati debitis.
        Aspernatur velit facere fuga asperiores eaque nulla? Ex suscipit
        sapiente esse nemo excepturi unde culpa assumenda explicabo saepe veniam
        modi atque repellendus optio ducimus adipisci rem quam, laudantium
        molestiae nesciunt est doloremque pariatur reiciendis itaque! Accusamus,
        explicabo? Possimus aliquid pariatur facilis nulla dignissimos quos
        dolor quaerat numquam, qui est tenetur delectus impedit minus fugiat non
        explicabo sunt ad facere cum excepturi incidunt alias! Quas adipisci non
        consectetur. Laudantium, sed, odio nihil aliquid aperiam exercitationem
        ullam saepe nulla veniam accusamus quidem nesciunt. Ipsa sapiente,
        ratione blanditiis laudantium nobis sit hic commodi, voluptatibus
        impedit quis minima magnam a nisi. Eaque nesciunt est nostrum tempore,
        culpa vel in eum illo veniam ut excepturi blanditiis! Facilis voluptatum
        quod blanditiis explicabo illum perspiciatis officiis similique.
        Perspiciatis, vel? Laborum perspiciatis mollitia quam quasi?
      </p>
    </PageContainer>
  )
}
