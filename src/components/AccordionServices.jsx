import React from 'react';
import {Accordion, rem} from '@mantine/core';
import {IconPlus} from '@tabler/icons-react';
import useMediaQueries from "@/utils/useMediaQueries";


const AccordionServices = () => {
  const md = useMediaQueries("md")

  return (
    <Accordion
      chevron={<IconPlus size="2rem"/>}
      styles={{
        root: {
          borderTop: `${rem(1)} solid #C98D4E`,
          "&": {

            maxWidth: "760px",
            width: "100%",
          },
        },
        control: {
          whiteSpace: "wrap",
          wordWrap: "wrap",
          padding: ` ${!md ? "0 10px" : " 0 16px 0 20px"}`,
          color: "#C98D4E",
          '&:hover': {
            backgroundColor: '#111',
          },
          border: "none",
          '&:first-child': {
            borderTop: `${rem(1)} solid #C98D4E`,
          },
        },

        item: {
          // styles added to all items
          color: "#C98D4E",
          border: "none",
          '&:last-child': {
            borderBottom: `${rem(1)} solid #C98D4E`,
          },
          backgroundColor: '#22222200',
          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#110',
          },
          '&:hover': {
            backgroundColor: '#111',
          }
        },

        chevron: {
          // styles added to chevron when it should rotate
          color: "#C98D4E",
          marginLeft: md ? '20px' : '4px',

          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
      <Accordion.Item value="diagnostic">
        <Accordion.Control>ROZKŁAD TAROTA <span className={"whitespace-nowrap"}>(DIAGNOSTYKA) 🔍</span></Accordion.Control>
        <Accordion.Panel>

          <p className={"mb-[20px]"}>Dziś chcę opowiedzieć Ci o tak ważnym narzędziu, jakim jest tarot 🙏 Rozkład tarota
            to zwierciadło duszy — dzięki niemu mogę w pełni przeanalizować Twoją sytuację, a następnie zaproponować
            najbardziej odpowiednie rozwiązanie. Z moją pomocą wreszcie odkryjesz źródło swojego problemu i rozwiążesz go
            raz na zawsze. Nie zadowalaj się szablonowymi rozwiązaniami — zaufaj mojemu doświadczeniu, a udzielę Ci
            indywidualnej pomocy, na jaką zasługujesz 😌</p>
          <p className={"mb-[20px]"}>🔸 Otrzymaj kompleksową diagnostykę wszystkich sfer swojego życia. Ocenię Twoje
            relacje, zdrowie i sytuację finansową oraz sprawdzę, czy nie działają na Ciebie negatywne wpływy magiczne.
            Pozwól mi pomóc Ci znaleźć źródło Twoich problemów i zaproponować indywidualne rozwiązanie.</p>
          <p>🔸 Do diagnostyki potrzebuję jedynie Twoich zdjęć i daty urodzenia. Na podstawie tych danych mogę dokładnie
            określić sytuację, która dzieje się w Twoim życiu i w Twoich relacjach. Czasem diagnostyka potrzebna jest
            tylko po to, by zrozumieć przyczyny Twojego lęku i znaleźć właściwe rozwiązanie. A po diagnostyce możemy od
            razu przejść do działania. Aby zamówić diagnostykę — napisz do mnie w wiadomości prywatnej.</p>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="love_spell">
        <Accordion.Control>ZAKLĘCIE MIŁOSNE <span
          className={"whitespace-nowrap"}>«ZEW SERCA» ❤️</span></Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>Zaklęcie «Zew serca» to jedno z najsilniejszych w magii miłosnej. 🔥 Tworzy
            prawdziwe uczucia, napełnia światłem serca zakochanych i łączy ich na całe życie.</p>
          <p className={"mb-[30px]"}>Po rytuale zaczniesz odczuwać wzajemne uczucia miłości, a wszystkie okoliczności
            będą sprzyjać poprawie relacji między wami. Zaklęcie sprawi, że dusza, myśli i serce ukochanej osoby staną
            się całkowicie Twoje.</p>
          <p className={"mb-[30px]"}>🔸 EFEKT:<br/>
            1. Mężczyzna przestaje zwracać uwagę na inne kobiety.<br/>
            2. Oboje zaczynacie czuć, że stale ciągnie was do siebie i nikt inny nie jest wam potrzebny.<br/>
            3. W związku pojawiają się świeże uczucia, a wybranek pokocha Cię tak mocno jak dawniej.<br/>
          </p>
          <p>🔸 Wyobraź sobie związek, w którym oboje partnerzy odczuwają nieustanne przyciąganie do siebie, bez
            rozproszeń i błądzących spojrzeń. Z «Zewem serca» stanie się to rzeczywistością. Nie godź się na związek w
            zastoju ani na nieodwzajemnione uczucie. Odkryj siłę prawdziwej miłości dzięki «Zewowi serca» i doświadcz
            relacji, w której partner pokocha Cię tak jak dawniej, a nawet mocniej.</p>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="protection">
        <Accordion.Control>⚔️OCHRONA MAGICZNA⚔️</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>🔸 Niestety dzisiejszy świat staje się coraz bardziej okrutny i niebezpieczny.
            Oprócz negatywnie nastawionych ludzi, którzy nie potrafią po prostu cieszyć się cudzym sukcesem, lecz z
            zazdrości celowo chcą zaszkodzić, atakują nas różne wirusy prowadzące do śmierci wielu osób. Magiczna ochrona
            człowieka potrafi uchronić go przed niebezpiecznymi skutkami każdego rodzaju oddziaływania.</p>
          <p className={"mb-[30px]"}>🔸 Twoje pole energetyczne jest jak Twoja odporność — ktoś jest bardzo słaby i
            łatwo poddaje się wpływom, a ktoś inny jest wręcz nie do przebicia, choć tacy ludzie zwykle stanowią
            mniejszość. Może to pokazywać także Twój charakter: jeśli jesteś osobą wrażliwą i nieśmiałą, najprawdopodobniej
            łatwo ulegniesz negatywnym oddziaływaniom, a jeśli jesteś osobą silnej woli i niesentymentalną — odwrotnie.
            Nie zawsze jednak tak bywa, przypadki są różne i niemal wszyscy tak samo potrzebują magicznej ochrony przed
            negatywną energią!</p>
          <p>🔸 Ten rytuał ma zapewnić Ci kompleksową i dożywotnią ochronę przed urokiem, klątwami, wampirami
            energetycznymi oraz całym złem, jakie może czekać Cię na życiowej drodze. Dzięki niemu otrzymasz nie tylko
            pełne oczyszczenie, ale i barierę ochronną.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="harmonization">
        <Accordion.Control>HARMONIZACJA <span className={"whitespace-nowrap"}>RELACJI 🙌</span></Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>To jeden z najskuteczniejszych sposobów na poprawę relacji w rodzinie ❗️</p>
          <p className={"mb-[30px]"}>Oczyszczam waszą parę z negatywnej energii, która nagromadziła się przez wiele lat.
            Między partnerami wraca zgoda, a do domu — spokój, i to nie za sprawą obcych sił, lecz dzięki wspólnym
            wysiłkom.</p>
          <p className={"mb-[30px]"}>Rytuał doprowadzi was do rezultatu, który w dłuższej perspektywie będzie dla was
            najlepszy❗️</p>
          <p className={"mb-[30px]"}>🔸 W JAKIM PRZYPADKU POTRZEBUJESZ HARMONIZACJI?<br/>

            - Wasze uczucia dawno wygasły i nie ma nadziei na ich odnowienie.<br/>
            - Partnerzy darzyli się wzajemnym uczuciem, kochali się, jednak teraz pojawia się między nimi
            niezrozumienie.<br/>
            - Ukochana osoba nie zrywa związku, ale też nie wkłada wysiłku w jego rozwój i poprawę.<br/>
            - Zakochani często się kłócą.<br/>
            - Jeden z partnerów zbytnio skupia się na sobie, całkowicie zapominając o Tobie.<br/>
            - Ukochana osoba odeszła albo zamierza to zrobić.<br/>
            - Wybranek stale zdradza, nie zrywając przy tym związku.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="cemetery_love_spell">
        <Accordion.Control>RYTUAŁ MIŁOSNY <span
          className={"whitespace-nowrap"}>«ZWROT LOSU» 💘</span></Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[30px]"}>🔸 Łączy ludzkie serca i losy. Po tym rytuale miłosnym zaczniecie z partnerem żyć
            jednym życiem. W waszym domu zawsze będzie ciepło i przytulnie, a w sercach — namiętność i wzajemna miłość.
          </p>
          <p className={"mb-[30px]"}>🔸 Miłość stworzona za pomocą tego rytuału jest odporna na czas. Po latach ludzie
            nadal kochają się mocniej niż wcześniej, szanują i cenią siebie nawzajem.</p>
          <p className={"mb-[30px]"}>🔸 Taki rytuał miłosny nie niesie negatywnych następstw, ponieważ zawsze wykonuję
            wylewanie wosku przeciw negatywnej energii.</p>
          <p>Zachowaj swoją miłość 😌</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="amulets">
        <Accordion.Control>AMULETY MAGICZNE 🧿</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[25px]"}>Podczas rytuałów i w codziennym życiu używam magicznych amuletów, które pomagają
            pokonać wszelkie trudności.</p>
          <p className={"mb-[25px]"}>🔸 W mojej ofercie znajduje się wiele cennych amuletów z naturalnego kamienia,
            zaprogramowanych na ochronę, szczęście, miłość, harmonię, zdrowie i finanse.</p>
          <p className={"mb-[25px]"}>🔸 Gdy wymaga tego sytuacja, programuję amulet i przywiązuję go do Twojej aury lub
            aury osoby, dla której będzie przeznaczony (można go zamówić także dla innych osób). W każdym amulecie
            zawarte są Siły Światła.</p>
          <p className={"mb-[25px]"}>Gdy tylko go otrzymasz, od razu poczujesz jego moc i pozytywne wibracje.</p>
          <p>❗️ Amulety mogą się od siebie różnić. Nie ma dwóch takich samych. Specjalnie dla Ciebie intuicyjnie wybiorę
            ten najbardziej odpowiedni.</p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="moneys">
        <Accordion.Control>TRUDNOŚCI FINANSOWE ❓️</Accordion.Control>
        <Accordion.Panel>
          <p className={"mb-[25px]"}>Znasz sytuację, gdy robisz wszystko, co możliwe, starasz się z całych sił, a
            pieniądze jakby celowo omijają Cię bokiem?
            Twój kanał finansowy jest zablokowany❗️
            Trzeba go pilnie oczyścić. Następstwa mogą być okropne.
          </p>
          <p className={"mb-[25px]"}>🔸JAK OCZYŚCIĆ KANAŁ FINANSOWY?</p>
          <p className={"mb-[25px]"}>W magii jest wiele skutecznych rytuałów oczyszczania kanałów finansowych, ale ja
            władam tym najpotężniejszym i najskuteczniejszym 🔥
            Jeden ze sposobów oczyszczenia:
          </p>
          <p className={"mb-[10px]"}>Wylewanie woskiem kanału finansowego:</p>
          <p className={"mb-[25px]"}>- praca wykonywana jest woskiem. Ma on zdolność gromadzenia na sobie negatywnych
            programów, zarówno cudzych, jak i własnych.</p>
          <p className={"mb-[25px]"}>Jednocześnie działa jak tarcza odbijająca wszystkie ataki.</p>
          <p className={"mb-[25px]"}>To niewiarygodnie skuteczny rytuał, który gwarantuje rezultat!</p>
          <p className={"mb-[25px]"}>🔸 EFEKT:<br/>
            Zaraz po tym magicznym rytuale zauważysz, jak cudownie zmieni się sfera finansowa Twojego życia!
            Pojawią się nowe źródła dochodu, a pieniądze popłyną szerokim strumieniem 💵
          </p>
          <p className={"mb-[25px]"}>🔸 CO JEST POTRZEBNE DO RYTUAŁU?<br/>
            Po prostu napisz do mnie. Pracuję na każdą odległość — niezależnie od tego, jak daleko jesteś, potrzebuję
            tylko Twojego zdjęcia.</p>
          <p className={"mb-[25px]"}>🔸 DIAGNOSTYKA PRZED RYTUAŁEM<br/>
            Rozpoczynając pracę, należy przeprowadzić diagnostykę 🔮
          </p>
          <p className={"mb-[15px]"}>❕Po diagnostyce będę mogła dokładnie ocenić zakres pracy i zagwarantować efekt.</p>
          <p>Aby się ze mną skontaktować, napisz wiadomość prywatną.</p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
export default AccordionServices;
