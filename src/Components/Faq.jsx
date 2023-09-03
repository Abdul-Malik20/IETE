import Accordion from 'react-bootstrap/Accordion';

function Faq() {
  return (
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is the Eligibility condition for enrolling AMIETE?</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#FEFFAC'}}>
          A student applying for AMIETE should have passed 10+2 exam with PCM or should have done Diploma in Engineering including DipIETE and should not be less than 16 years age and must have practical work/training experience.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is the admission procedure for enrolling in AMIETE/DipIETE?</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#FEFFAC'}}>
          Student membership form is to be filled and sent to IETE HQ along with a draft of Rs. 6000/- towards enrolment fee (in favour of Secretary General, IETE payble at New Delhi) along with requisite documents to IETE HQ. Students are also required to include fee of Rs 250/- along with the application form which is downloadable from the web.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What are the documents to be submitted with enrolment form?</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#FEFFAC'}}>
          Every application for enrolment must be attached with attested copies of the following documents:-

          (a) Matriculation certificate.
          (b) Certificates of Education.
          (c) Certificate of experience.
          (d) Bank Draft for Rs 6250/-.
          (e) Two passport size photographs .
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What is the procedure of applying for stream change?</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#FEFFAC'}}>
          Change of stream is permitted on a payment of Rs.600/- along with a declaration form, original copy of the ID-Card and a latest photograph any time during the student membership. However, only those subjects which have equivalency in the both stream will be counted in the new stream opted by the student.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>More Enquiries About "STUDENT MEMBERSHIP</Accordion.Header>
        <Accordion.Body style={{backgroundColor:'#FEFFAC'}}>
          <a href='https://www.iete.org/Faq.html' alt='IETE'>Please Visit Us Our Official Website</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Faq;