import Slider from "@/components/Slider";
import Carousel from "@/components/TechCarousel";
import Courses from "@/components/Courses";
import QuoteRequestForm from "@/components/QuoteRequestForm";

export default function Home() {
  const images = ["/images/banner-thai-hoa.gif"];
  const techImages = [
    "/images/carousel/react-icon.png",
    "/images/carousel/nest-icon.png",
    "/images/carousel/next-icon.png",
    "/images/carousel/node.png",
    "/images/carousel/mongo-icon.png",
    "/images/carousel/mysql-icon.png",
    "/images/carousel/spring.png",
    "/images/carousel/vue-icon.png",
    "/images/carousel/hlf-icon.png",
    "/images/carousel/angular-icon.png",
    "/images/carousel/django-icon.png",
    "/images/carousel/solidity-icon.png",
  ];

  const courses = [
    {
      title: "Ly nhựa 1",
      description: "Chi tiết về ly nhựa 1",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 2",
      description: "Chi tiết về ly nhựa 2",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 3",
      description: "Chi tiết về ly nhựa 3",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
    {
      title: "Ly nhựa 4",
      description: "Chi tiết về ly nhựa 4",
      imageUrl: "/images/courses/ly-nhua-1.png",
      link: "/course/react",
    },
  ];

  // const blogs = [
  //   {
  //     title: "Cách tối ưu SEO với Next.js",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  //   {
  //     title: "Cách tối ưu SEO với Next.js 2",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  //   {
  //     title: "Cách tối ưu SEO với Next.js 3",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  //   {
  //     title: "Cách tối ưu SEO với Next.js 4",
  //     description: "Tối ưu thứ hạng tìm kiếm google",
  //     imageUrl: "/images/blogs/blog-nextjs.png",
  //     link: "/course/react",
  //   },
  // ];
  return (
    <div>
      <Slider images={images} />
      <Carousel images={techImages} />
      <Courses
        courses={courses}
        title="Sản phẩm nổi bật"
        allCoursesLink="/course"
        showButton={true}
      />
      <QuoteRequestForm />

      {/* <Blogs
        blogs={blogs}
        title="Blog"
        allBlogLink="#allBlog"
        showButton={true}
      /> */}
    </div>
  );
}
