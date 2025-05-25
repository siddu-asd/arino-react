import { Icon } from '@iconify/react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

const postData = [
  {
    id: 'fear-vs-art-business',
    url: '/blog/fear-vs-art-business', // for slider & routing
    href: '/blog/fear-vs-art-business', // for blog details (same as url)
    src: '/images/post_1.jpeg',          // slider image
    thumb: '/images/post_1.jpeg',        // blog detail thumb (can be same)
    alt: 'Post',
    date: '07 Mar 2022',
    title: 'How to keep fear from ruining your art business with confidence',
    subtitle: 'Fear can be a huge barrier in creative business...',
    category: 'Business',
    categoryHref: '/blog',
  },
  {
    id: 'artistic-creation',
    url: '/blog/artistic-creation',
    href: '/blog/artistic-creation',
    src: '/images/post_2.jpeg',
    thumb: '/images/post_2.jpeg',
    alt: 'Post',
    date: '10 Feb 2022',
    title: 'Artistic mind will be great for creation of anything',
    subtitle: 'Explore the unlimited potential of creativity...',
    category: 'Art',
    categoryHref: '/blog',
  },
  {
    id: 'ai-takes-over',
    url: '/blog/ai-takes-over',
    href: '/blog/ai-takes-over',
    src: '/images/post_3.jpeg',
    thumb: '/images/post_3.jpeg',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'A.I will take over all jobs for humans within next year',
    subtitle: 'Artificial intelligence is changing the job landscape...',
    category: 'Tech',
    categoryHref: '/blog',
  },
  {
    id: 'creative-studio',
    url: '/blog/creative-studio',
    href: '/blog/creative-studio',
    src: '/images/post_5.jpeg',
    thumb: '/images/post_5.jpeg',
    alt: 'Post',
    date: '05 Mar 2022',
    title: 'Creative studio program coming soon',
    subtitle: 'Get ready for an exciting creative journey...',
    category: 'Photography',
    categoryHref: '/blog',
  },
  {
    id: 'artistic-mind',
    url: '/blog/artistic-mind',
    href: '/blog/artistic-mind',
    src: '/images/post_6.jpeg',
    thumb: '/images/post_6.jpeg',
    alt: 'Post',
    date: '04 Mar 2022',
    title: 'Artistic mind will be great for creation',
    subtitle: 'The power of imagination and creativity...',
    category: 'Tech',
    categoryHref: '/blog',
  },
    {
    id: 'ai-jobs',
    thumb: '/images/post_4.jpeg',
    title: 'A.I will take all human job within next year',
    subtitle:
      'Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Tortor posuere ac ut consequat semper viverra nam libero justo. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Purus sit amet luctus venenatis lectus. Nunc aliquet bibendum enim facilisis. Pretium viverra suspendisse potenti nullam ac tortor vitae.',
    date: '07 Mar 2022',
    category: 'Tech',
    categoryHref: '/blog',
    href: '/blog/ai-jobs',
  },
  // add more posts here if needed
];
export default function BlogDetailsPage() {
  const params = useParams()
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get the post data based on URL param
  const post = postData.find(p => p.id === params.blogDetailsId)

  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading 
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText={params.blogDetailsId}
      />
      {/* End Page Heading Section */}

      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img src={post?.thumb || '/images/default.jpeg'} alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">{post?.date || 'N/A'}</span>
                  <Link to={post?.categoryHref || '/blog'} className="cs-post_avatar">{post?.category || 'Unknown'}</Link>
                </Div>
                <h2 className="cs-post_title">{post?.title || 'Post Not Found'}</h2>
                <p>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique...</p>
                <blockquote className="cs-primary_font">
                  But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, who expound the actual teachings of the great explorer of the truth, the master.
                  <small>Loren Mulari</small>
                </blockquote>
                <p>On the other hand, we denounce with righteous indignation and dislike men who...</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_1.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_2.jpeg" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>Art is powerful and imaginary source</h3>
                <p>We denounce with righteous indignation and dislike men who are so beguiled and...</p>
                <p>So, blinded by desire, that they cannot foresee the pain and trouble...</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>

          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>

      {/* Start CTA Section */}
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
