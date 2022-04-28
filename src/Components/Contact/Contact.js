import React from 'react'
import "./contact.css"

const Contact = () => {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15437.362143248582!2d26.629617190081888!3d38.32038384144581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb90f9aaaaaaab%3A0xed70c1a0fe6503c9!2sIzmir%20Institute%20of%20Technology%20%C4%B0YTE!5e0!3m2!1sen!2str!4v1650542361267!5m2!1sen!2str" width="480" height="360" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    const iframe2 = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15437.362143248582!2d26.629617190081888!3d38.32038384144581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb90f9aaaaaaab%3A0xed70c1a0fe6503c9!2sIzmir%20Institute%20of%20Technology%20%C4%B0YTE!5e0!3m2!1sen!2str!4v1650542361267!5m2!1sen!2str" width="280" height="210" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    const Iframe = (props) => {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
  return (
      <div className='contact-mock'>
          <div className='flex-for-contact'>
              <div className='column-contact-1'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
              <div className='column-contact-2'>
                  <div className='map'>
                    <Iframe iframe={iframe}/>
                  </div>
                  <div className='map-little'>
                    <Iframe iframe={iframe2}/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Contact