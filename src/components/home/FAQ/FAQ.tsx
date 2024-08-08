import styles from './FAQ.module.css';
import BlockFaq from "./blockFAQ/blockFAQ.tsx";


const Faq = () => {

    const data = [
        {
            question: 'How can I track the status of my order?',
            answer: '',
            isOpen: false
            },
        {
            question: 'What payment methods do you accept?',
            answer: '',
            isOpen: true
        },
        {
            question: 'How can I return or exchange an item?',
            answer: '',
            isOpen: true
        },
    ];

    const answer = 'After placing your order, you will receive a confirmation ' +
        'email containing your order number and a tracking link. You can also log in to your ' +
        'account on our website and go to the "My Orders" section to track your delivery status.';

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <h1>FAQ</h1>
                {
                    data.map((el, i) => (
                        <div key={i}>
                            <BlockFaq isOpen={el.isOpen} textQues={el.question} textAnswer={answer}/>
                        </div>
                    ))
                }

            </div>

        </section>
    );
};

export default Faq;
