import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../../contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const CoreValue = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("pillars");
  const contentRef = useRef(null);

  const content = {
    vie: {
      title: "Giá Trị Thực Tiễn Với AGUAER",
      subtitle:
        "Hệ thống giá trị được triển khai trong mọi khía cạnh hoạt động giáo dục",
      intro:
        "AGUA International Education được xây dựng trên nền tảng các giá trị thực tiễn có thể đo lường được. Mỗi giá trị không chỉ là lời cam kết mà còn được cụ thể hóa thành quy trình, hệ thống và chỉ số đánh giá rõ ràng.",

      sections: {
        pillars: {
          id: "pillars",
          title: "Trụ Cột Giá Trị Cốt Lõi",
          subtitle:
            "5 trụ cột tạo nên nền tảng giáo dục AGUA với các chỉ số đo lường cụ thể",
          content: [
            {
              id: 1,
              title: "Cá Nhân Hóa Tối Ưu",
              description:
                "Phát triển lộ trình học tập riêng biệt cho từng học viên dựa trên phân tích nhu cầu chuyên sâu, mục tiêu nghề nghiệp và năng lực hiện tại.",
              keyMetrics: [
                { label: "Phân tích SWOT chi tiết", value: "100% học viên" },
                { label: "Tỷ lệ hoàn thành mục tiêu", value: "95%" },
                { label: "Thời gian điều chỉnh lộ trình", value: "48 giờ" },
                { label: "Số buổi coaching 1:1", value: "8+ buổi/khóa" },
              ],
              processes: [
                "Đánh giá năng lực đầu vào theo khung CEFR và khung năng lực chuyên môn",
                "Xây dựng lộ trình học tập cá nhân hóa với timeline cụ thể",
                "Hệ thống mentor 1:1 với tracking tiến độ chi tiết",
                "Portfolio học tập số hóa với đánh giá định kỳ 4 tuần/lần",
              ],
              tools: [
                "Hệ thống Learning Management System tích hợp AI",
                "Ứng dụng theo dõi tiến độ thời gian thực",
                "Công cụ đánh giá năng lực đa chiều",
                "Dashboard báo cáo cá nhân hóa tự động",
              ],
            },
            {
              id: 2,
              title: "Kết Quả Đo Lường Được",
              description:
                "Xây dựng hệ thống chỉ số đánh giá toàn diện từ kết quả học tập đến phát triển kỹ năng và thành công nghề nghiệp.",
              keyMetrics: [
                { label: "Số KPI đánh giá/khóa", value: "15 KPI" },
                { label: "Độ chính xác dự đoán", value: "96.3%" },
                { label: "Tỷ lệ đạt mục tiêu", value: "92%" },
                { label: "Thời gian phản hồi", value: "24 giờ" },
              ],
              processes: [
                "Đánh giá định kỳ 4 tuần/lần với báo cáo chi tiết 12 chỉ số",
                "Hệ thống tracking năng lực theo thời gian thực",
                "Đo lường ROI học tập cho từng học viên",
                "Báo cáo tổng hợp hiệu quả đào tạo hàng quý",
              ],
              tools: [
                "Hệ thống phân tích dữ liệu học tập tích hợp",
                "Công cụ đánh giá năng lực tự động hóa",
                "Phần mềm tracking tiến độ và hiệu suất",
                "Hệ thống báo cáo định dạng dashboard",
              ],
            },
            {
              id: 3,
              title: "Kết Nối Doanh Nghiệp Chiến Lược",
              description:
                "Xây dựng mạng lưới đối tác doanh nghiệp để cung cấp trải nghiệm thực tế và cơ hội nghề nghiệp.",
              keyMetrics: [
                { label: "Doanh nghiệp đối tác", value: "75+" },
                { label: "Việc làm sau 90 ngày", value: "85%" },
                { label: "Cơ hội thực tập/năm", value: "150+" },
                { label: "Tuyển dụng bởi đối tác", value: "65%" },
              ],
              processes: [
                "Chương trình Company Visit và Job Shadowing hàng tháng",
                "Hệ thống mentorship từ leader các tập đoàn",
                "Dự án thực tế giải quyết case study của doanh nghiệp",
                "Career Fair độc quyền 2 lần/năm với đối tác",
              ],
              tools: [
                "Cổng thông tin việc làm dành riêng cho học viên AGUA",
                "Hệ thống matching năng lực - vị trí tuyển dụng AI",
                "Platform kết nối học viên - mentor doanh nghiệp",
                "Cơ sở dữ liệu 500+ case study thực tế",
              ],
            },
            {
              id: 4,
              title: "Công Nghệ Giáo Dục Tiên Tiến",
              description:
                "Áp dụng công nghệ hiện đại để tối ưu hóa trải nghiệm học tập và nâng cao hiệu quả đào tạo.",
              keyMetrics: [
                { label: "Ứng dụng công nghệ 4.0", value: "100%" },
                { label: "Đầu tư R&D", value: "18% doanh thu" },
                { label: "Cải tiến phương pháp/năm", value: "30%" },
                { label: "Độ hài lòng công nghệ", value: "4.7/5.0" },
              ],
              processes: [
                "Nghiên cứu và phát triển phương pháp giảng dạy mới hàng quý",
                "Triển khai hệ thống học tập thích ứng (Adaptive Learning)",
                "Ứng dụng AI trong phân tích nhu cầu và cá nhân hóa",
                "Đào tạo đội ngũ về công nghệ giáo dục mới hàng năm",
              ],
              tools: [
                "Hệ thống LMS tích hợp AI và machine learning",
                "Thư viện học liệu số với 10,000+ tài nguyên",
                "Ứng dụng mobile learning với tính năng offline",
                "Công cụ virtual classroom và collaboration",
              ],
            },
            {
              id: 5,
              title: "Hệ Sinh Thái Hỗ Trợ Toàn Diện",
              description:
                "Xây dựng môi trường hỗ trợ đa chiều từ học tập đến phát triển nghề nghiệp và mạng lưới kết nối.",
              keyMetrics: [
                { label: "Cộng đồng cựu học viên", value: "2,500+" },
                { label: "Tham gia hoạt động alumni", value: "88%" },
                { label: "Sự kiện networking/năm", value: "36+" },
                { label: "Net Promoter Score", value: "72" },
              ],
              processes: [
                "Chương trình alumni engagement với các cấp độ tham gia",
                "Hệ thống mentorship ngược (alumni mentor thế hệ sau)",
                "Hỗ trợ career transition và upskilling trọn đời",
                "Mạng lưới kết nối chuyên ngành theo nhóm ngành nghề",
              ],
              tools: [
                "Platform cộng đồng alumni toàn cầu",
                "Hệ thống đăng ký và quản lý sự kiện chuyên nghiệp",
                "Cổng thông tin và tài nguyên hỗ trợ nghề nghiệp",
                "Hệ thống theo dõi và hỗ trợ cựu học viên tự động",
              ],
            },
          ],
        },
        framework: {
          id: "framework",
          title: "Khung Vận Hành Chuẩn Hóa",
          subtitle:
            "Hệ thống quản lý và vận hành đảm bảo chất lượng đồng nhất và hiệu quả tối ưu",
          content: [
            {
              component: "Quản Trị Chất Lượng",
              description:
                "Hệ thống quản lý chất lượng toàn diện theo tiêu chuẩn ISO 9001:2015",
              standards: [
                "Quy trình đánh giá đầu vào chuẩn hóa với 7 bước xác minh",
                "Hệ thống đo lường và cải tiến liên tục theo chu trình PDCA",
                "Kiểm soát tài liệu và hồ sơ điện tử với mã hóa tự động",
                "Đánh giá nội bộ hàng quý và đánh giá bên ngoài định kỳ",
              ],
              keyFeatures: [
                "Triển khai trên 100% các phòng ban",
                "Đạt chứng chỉ ISO từ năm 2020",
                "3 lần đánh giá giám sát hàng năm",
                "Tỷ lệ tuân thủ quy trình: 98.5%",
              ],
            },
            {
              component: "Phát Triển Đội Ngũ",
              description:
                "Chương trình đào tạo và phát triển chuyên môn cho đội ngũ",
              standards: [
                "Yêu cầu chứng chỉ giảng dạy quốc tế (CELTA, TESOL, DELTA)",
                "Đào tạo nội bộ hàng tháng về phương pháp giảng dạy mới",
                "Chương trình mentoring và coaching nội bộ có cấu trúc",
                "Đánh giá năng lực và phát triển nghề nghiệp 6 tháng/lần",
              ],
              keyFeatures: [
                "Đội ngũ 120+ chuyên gia có chứng chỉ quốc tế",
                "Chi phí đào tạo/nhân sự: $1,500/năm",
                "Tỷ lệ giữ chân nhân tài: 92%",
                "Chương trình leadership pipeline đa cấp",
              ],
            },
            {
              component: "Quản Lý Tài Nguyên",
              description: "Hệ thống quản lý và tối ưu hóa tài nguyên giáo dục",
              standards: [
                "Thư viện học liệu số chuẩn hóa với phân loại theo cấp độ",
                "Hệ thống quản lý phòng học và thiết bị thông minh",
                "Cơ sở dữ liệu case study và bài giảng có hệ thống",
                "Hệ thống bảo trì và nâng cấp công nghệ định kỳ",
              ],
              keyFeatures: [
                "10,000+ tài nguyên học liệu số",
                "Hệ thống 15 phòng học hiện đại",
                "Tỷ lệ sử dụng tài nguyên: 85%",
                "Thời gian bảo trì trung bình: 4 giờ",
              ],
            },
            {
              component: "Đo Lường Hiệu Quả",
              description: "Hệ thống đánh giá và báo cáo hiệu quả đa chiều",
              standards: [
                "Bộ chỉ số KPI toàn diện cho từng phòng ban (25+ chỉ số)",
                "Hệ thống báo cáo real-time dashboard tự động cập nhật",
                "Phân tích dữ liệu và dự báo hiệu quả bằng AI",
                "Báo cáo tác động xã hội và ROI theo định kỳ",
              ],
              keyFeatures: [
                "Tần suất báo cáo: hàng ngày/tuần/tháng/quý",
                "Độ chính xác dữ liệu: 99.8%",
                "Thời gian xử lý báo cáo: 5 phút",
                "Số lượng dashboard theo dõi: 18",
              ],
            },
          ],
        },
        quality: {
          id: "quality",
          title: "Hệ Thống Đảm Bảo Chất Lượng",
          subtitle:
            "Các cơ chế và quy trình đảm bảo duy trì và nâng cao chất lượng dịch vụ",
          content: [
            {
              mechanism: "Đánh Giá Định Kỳ",
              description: "Hệ thống đánh giá toàn diện và có cấu trúc",
              details: [
                "Đánh giá học viên 4 tuần/lần với 15 chỉ số cụ thể",
                "Khảo sát hài lòng tổng thể mỗi khóa học với 30+ tiêu chí",
                "Đánh giá nội bộ hàng quý theo tiêu chuẩn ISO 9001:2015",
                "Đánh giá bên ngoài bởi 3 tổ chức kiểm định độc lập",
                "Đánh giá giữa kỳ và cuối kỳ với rubric chi tiết",
                "Phân tích dữ liệu học tập hàng tháng",
              ],
              metrics: [
                "Tần suất đánh giá: 4 tuần/lần",
                "Tỷ lệ phản hồi học viên: 95%",
                "Độ tin cậy đánh giá: 0.92 Cronbach's Alpha",
                "Thời gian xử lý kết quả: 24 giờ",
              ],
            },
            {
              mechanism: "Cải Tiến Liên Tục",
              description: "Quy trình cải tiến dựa trên dữ liệu và phản hồi",
              details: [
                "Hệ thống thu thập và phân tích phản hồi tự động real-time",
                "Quy trình xử lý khiếu nại trong 24 giờ với 5 cấp độ",
                "Ứng dụng phương pháp Kaizen trong cải tiến dịch vụ",
                "Đầu tư R&D 18% doanh thu dựa trên dữ liệu và nhu cầu thị trường",
                "Cập nhật chương trình đào tạo 6 tháng/lần",
                "Hội đồng chất lượng họp hàng tháng",
              ],
              metrics: [
                "Số cải tiến/năm: 150+",
                "Thời gian triển khai cải tiến: 2-4 tuần",
                "Tỷ lệ cải tiến thành công: 85%",
                "ROI từ cải tiến: 3.2x",
              ],
            },
            {
              mechanism: "Minh Bạch Thông Tin",
              description: "Cơ chế công khai và minh bạch thông tin",
              details: [
                "Công khai 100% tiêu chuẩn đánh giá và phương pháp tính điểm",
                "Báo cáo kết quả học tập chi tiết và dễ hiểu với infographic",
                "Chia sẻ dữ liệu thành công và 500+ case study thực tế",
                "Cơ chế phản hồi và giải trình minh bạch 2 chiều",
                "Hệ thống theo dõi tiến độ công khai cho phụ huynh",
                "Báo cáo tác động xã hội hàng năm",
              ],
              metrics: [
                "Độ minh bạch thông tin: 95%",
                "Tỷ lệ hài lòng về minh bạch: 4.8/5.0",
                "Tần suất cập nhật thông tin: hàng tuần",
                "Số kênh thông tin: 8 (web, app, email, SMS, v.v.)",
              ],
            },
          ],
        },
        commitments: {
          id: "commitments",
          title: "Cam Kết Với Học Viên",
          subtitle:
            "Những cam kết cụ thể, có thể đo lường và có hợp đồng ràng buộc",
          content: [
            {
              commitment: "Cam Kết Kết Quả Đầu Ra",
              details:
                "Hoàn 100% học phí nếu không đạt đầu ra đã thỏa thuận trong hợp đồng đào tạo",
              specifics: [
                "Xác định rõ 5-7 mục tiêu học tập cụ thể trong hợp đồng",
                "Đo lường bằng bài đánh giá chuẩn hóa và portfolio",
                "Thời gian đánh giá: sau 30 ngày kết thúc khóa học",
                "Quy trình hoàn tiền trong 15 ngày làm việc",
              ],
              successRate: "98.5% học viên đạt mục tiêu",
            },
            {
              commitment: "Hỗ Trợ Toàn Diện 24/7",
              details:
                "Dịch vụ hỗ trợ đa kênh với thời gian phản hồi tối đa 2 giờ",
              specifics: [
                "Hotline hoạt động 24/7 với đội ngũ chuyên môn",
                "Hỗ trợ qua chat, email, video call",
                "Hệ thống ticket tracking tự động",
                "Đội ngũ hỗ trợ kỹ thuật và học thuật chuyên biệt",
              ],
              successRate: "99.2% phản hồi trong 2 giờ",
            },
            {
              commitment: "Cập Nhật Kiến Thức Trọn Đời",
              details:
                "Truy cập miễn phí vào các cập nhật chương trình và tài nguyên trong 24 tháng sau tốt nghiệp",
              specifics: [
                "Access to all updated course materials and resources",
                "Tham gia workshop cập nhật hàng quý",
                "Nhận bản tin chuyên môn hàng tháng",
                "Tham gia cộng đồng học tập liên tục",
              ],
              successRate: "45% cựu học viên tham gia thường xuyên",
            },
            {
              commitment: "Kết Nối Nghề Nghiệp Đảm Bảo",
              details:
                "Đảm bảo ít nhất 3 cơ hội phỏng vấn với đối tác tuyển dụng trong lĩnh vực mục tiêu",
              specifics: [
                "Matching profile với yêu cầu công việc",
                "Training phỏng vấn và xây dựng CV",
                "Theo dõi và hỗ trợ sau phỏng vấn",
                "Đánh giá và tư vấn cải thiện",
              ],
              successRate: "85% có việc làm trong 90 ngày",
            },
            {
              commitment: "Phát Triển Dài Hạn",
              details:
                "Chương trình mentoring miễn phí 6 tháng sau khóa học và các workshop định kỳ hàng quý",
              specifics: [
                "1 mentor chuyên môn hỗ trợ 6 tháng",
                "4 workshop phát triển kỹ năng/năm",
                "Access to exclusive career resources",
                "Tham gia mạng lưới alumni toàn cầu",
              ],
              successRate: "92% học viên hài lòng với mentoring",
            },
          ],
        },
        metrics: {
          id: "metrics",
          title: "Chỉ Số Hiệu Quả & Tài Chính",
          subtitle:
            "Các chỉ số đo lường hiệu quả hoạt động, đầu tư và tác động",
          content: [
            {
              category: "Hiệu Quả Học Tập",
              items: [
                {
                  metric: "Tỷ lệ hoàn thành khóa học",
                  value: "96%",
                  trend: "+2% yoy",
                },
                {
                  metric: "Điểm đánh giá cuối khóa",
                  value: "8.7/10",
                  trend: "+0.3 yoy",
                },
                {
                  metric: "Tỷ lệ học viên quay lại",
                  value: "48%",
                  trend: "+5% yoy",
                },
                {
                  metric: "Thời gian học trung bình/ngày",
                  value: "2.5 giờ",
                  trend: "stable",
                },
                {
                  metric: "Tỷ lệ tương tác bài giảng",
                  value: "85%",
                  trend: "+8% yoy",
                },
                {
                  metric: "Độ hài lòng tổng thể",
                  value: "4.8/5.0",
                  trend: "+0.2 yoy",
                },
              ],
              description:
                "Chỉ số đo lường hiệu quả học tập và sự hài lòng của học viên",
            },
            {
              category: "Hiệu Quả Đầu Tư",
              items: [
                {
                  metric: "ROI trung bình cho học viên",
                  value: "4.2x",
                  trend: "+0.3x yoy",
                },
                {
                  metric: "Thời gian hoàn vốn trung bình",
                  value: "14 tháng",
                  trend: "-2 tháng yoy",
                },
                {
                  metric: "Chi phí thu hút học viên mới",
                  value: "$850",
                  trend: "-$50 yoy",
                },
                {
                  metric: "Lifetime Value học viên",
                  value: "$12,500",
                  trend: "+$1,200 yoy",
                },
                { metric: "Tỷ lệ chuyển đổi", value: "35%", trend: "+3% yoy" },
                {
                  metric: "Chi phí phục vụ học viên",
                  value: "$420",
                  trend: "-$30 yoy",
                },
              ],
              description: "Chỉ số tài chính và hiệu quả đầu tư",
            },
            {
              category: "Phát Triển Bền Vững",
              items: [
                {
                  metric: "Tốc độ tăng trưởng doanh thu",
                  value: "35%/năm",
                  trend: "+5% yoy",
                },
                {
                  metric: "Tỷ lệ tái đầu tư",
                  value: "40% lợi nhuận",
                  trend: "stable",
                },
                {
                  metric: "Quy mô đội ngũ chuyên môn",
                  value: "120+ người",
                  trend: "+15% yoy",
                },
                { metric: "Số khóa học mới/năm", value: "8", trend: "+2 yoy" },
                {
                  metric: "Tỷ lệ giữ chân nhân tài",
                  value: "92%",
                  trend: "+3% yoy",
                },
                {
                  metric: "Đầu tư R&D",
                  value: "18% doanh thu",
                  trend: "+2% yoy",
                },
              ],
              description: "Chỉ số phát triển tổ chức và bền vững",
            },
            {
              category: "Tác Động Xã Hội",
              items: [
                {
                  metric: "Học viên tốt nghiệp/năm",
                  value: "1,200+",
                  trend: "+20% yoy",
                },
                {
                  metric: "Việc làm tạo ra/năm",
                  value: "850+",
                  trend: "+15% yoy",
                },
                {
                  metric: "Đối tác doanh nghiệp",
                  value: "75+",
                  trend: "+12 yoy",
                },
                {
                  metric: "Học bổng cung cấp/năm",
                  value: "$150,000",
                  trend: "+25% yoy",
                },
                {
                  metric: "Sự kiện cộng đồng/năm",
                  value: "36+",
                  trend: "+5 yoy",
                },
                { metric: "Net Promoter Score", value: "72", trend: "+5 yoy" },
              ],
              description: "Chỉ số tác động đến cộng đồng và xã hội",
            },
          ],
        },
      },

      menuItems: [
        { id: "pillars", label: "Trụ Cột Giá Trị" },
        { id: "framework", label: "Khung Vận Hành" },
        { id: "quality", label: "Đảm Bảo Chất Lượng" },
        { id: "commitments", label: "Cam Kết Học Viên" },
        { id: "metrics", label: "Chỉ Số Hiệu Quả" },
      ],

      conclusion:
        "Hệ thống giá trị của AGUA được thiết kế như một thể thống nhất - từ chiến lược đến vận hành, từ con người đến công nghệ. Mỗi thành phần đều được đo lường bằng chỉ số cụ thể, đánh giá định kỳ và cải tiến liên tục. Chúng tôi không chỉ cam kết mà còn chứng minh bằng kết quả thực tế, tạo ra tác động tích cực và bền vững cho từng học viên và toàn bộ cộng đồng.",
    },

    en: {
      title: "AGUAER Practical Values",
      subtitle:
        "A value system implemented across all aspects of educational operations",
      intro:
        "AGUA International Education is built on practical, measurable values. Each value is not just a commitment but is operationalized into clear processes, systems, and evaluation metrics.",

      sections: {
        pillars: {
          id: "pillars",
          title: "Core Value Pillars",
          subtitle:
            "5 pillars forming AGUA's educational foundation with specific measurement metrics",
          content: [
            {
              id: 1,
              title: "Optimal Personalization",
              description:
                "Develop individualized learning pathways based on in-depth needs analysis, career goals, and current competencies.",
              keyMetrics: [
                { label: "Detailed SWOT analysis", value: "100% students" },
                { label: "Goal achievement rate", value: "95%" },
                { label: "Pathway adjustment time", value: "48 hours" },
                { label: "1:1 coaching sessions", value: "8+ sessions/course" },
              ],
              processes: [
                "Initial competency assessment based on CEFR and professional frameworks",
                "Personalized learning pathway development with specific timelines",
                "1:1 mentor system with detailed progress tracking",
                "Digital learning portfolio with 4-week periodic evaluations",
              ],
              tools: [
                "AI-integrated Learning Management System",
                "Real-time progress tracking application",
                "Multidimensional competency assessment tool",
                "Automated personalized reporting dashboard",
              ],
            },
            {
              id: 2,
              title: "Measurable Results",
              description:
                "Build a comprehensive evaluation system covering learning outcomes, skill development, and career success.",
              keyMetrics: [
                { label: "Evaluation KPIs/course", value: "15 KPIs" },
                { label: "Prediction accuracy", value: "96.3%" },
                { label: "Goal achievement rate", value: "92%" },
                { label: "Feedback time", value: "24 hours" },
              ],
              processes: [
                "4-week periodic evaluations with 12-indicator detailed reports",
                "Real-time competency tracking system",
                "Learning ROI measurement per student",
                "Quarterly comprehensive training effectiveness reports",
              ],
              tools: [
                "Integrated learning data analysis system",
                "Automated competency assessment tools",
                "Progress and performance tracking software",
                "Dashboard-formatted reporting system",
              ],
            },
            {
              id: 3,
              title: "Strategic Corporate Connections",
              description:
                "Build a network of corporate partners to provide real-world experiences and career opportunities.",
              keyMetrics: [
                { label: "Corporate partners", value: "75+" },
                { label: "Employment within 90 days", value: "85%" },
                { label: "Internship opportunities/year", value: "150+" },
                { label: "Hired by partners", value: "65%" },
              ],
              processes: [
                "Monthly Company Visit and Job Shadowing programs",
                "Mentorship system from corporate leaders",
                "Real projects solving actual business case studies",
                "Exclusive Career Fair twice annually with partners",
              ],
              tools: [
                "Dedicated job portal for AGUA students",
                "AI-powered competency-job position matching system",
                "Student-enterprise mentor connection platform",
                "Database of 500+ real case studies",
              ],
            },
            {
              id: 4,
              title: "Advanced Educational Technology",
              description:
                "Apply modern technology to optimize learning experiences and enhance training effectiveness.",
              keyMetrics: [
                { label: "Education 4.0 adoption", value: "100%" },
                { label: "R&D investment", value: "18% revenue" },
                { label: "Methodology improvement/year", value: "30%" },
                { label: "Tech satisfaction score", value: "4.7/5.0" },
              ],
              processes: [
                "Quarterly research and development of new teaching methods",
                "Implementation of Adaptive Learning systems",
                "Application of AI in needs analysis and personalization",
                "Annual training on new educational technologies",
              ],
              tools: [
                "AI and machine learning integrated LMS",
                "Digital learning library with 10,000+ resources",
                "Mobile learning app with offline features",
                "Virtual classroom and collaboration tools",
              ],
            },
            {
              id: 5,
              title: "Comprehensive Support Ecosystem",
              description:
                "Build a multi-dimensional support environment from learning to career development and networking.",
              keyMetrics: [
                { label: "Alumni community", value: "2,500+" },
                { label: "Alumni activity participation", value: "88%" },
                { label: "Networking events/year", value: "36+" },
                { label: "Net Promoter Score", value: "72" },
              ],
              processes: [
                "Alumni engagement program with multiple participation levels",
                "Reverse mentorship system (alumni mentor new generations)",
                "Lifetime career transition and upskilling support",
                "Industry-specific networking groups by professional field",
              ],
              tools: [
                "Global alumni community platform",
                "Professional event registration and management system",
                "Career support resource portal",
                "Automated alumni tracking and support system",
              ],
            },
          ],
        },
        framework: {
          id: "framework",
          title: "Standardized Operational Framework",
          subtitle:
            "Management and operation systems ensuring consistent quality and optimal efficiency",
          content: [
            {
              component: "Quality Governance",
              description:
                "Comprehensive quality management system ISO 9001:2015 certified",
              standards: [
                "Standardized admission assessment process with 7 verification steps",
                "Continuous measurement and improvement PDCA cycle system",
                "Electronic document and record control with automatic coding",
                "Quarterly internal audits and periodic external audits",
              ],
              keyFeatures: [
                "Implemented across 100% of departments",
                "ISO certified since 2020",
                "3 surveillance audits annually",
                "Process compliance rate: 98.5%",
              ],
            },
            {
              component: "Team Development",
              description:
                "Professional training and development program for staff",
              standards: [
                "International teaching certification requirements (CELTA, TESOL, DELTA)",
                "Monthly internal training on new teaching methodologies",
                "Structured internal mentoring and coaching programs",
                "6-month competency assessment and career development cycles",
              ],
              keyFeatures: [
                "120+ certified professional team members",
                "Training cost per staff: $1,500/year",
                "Talent retention rate: 92%",
                "Multi-level leadership pipeline program",
              ],
            },
            {
              component: "Resource Management",
              description:
                "Educational resource management and optimization system",
              standards: [
                "Standardized digital learning library with level-based classification",
                "Smart classroom and equipment management system",
                "Systematic case study and lecture material database",
                "Regular technology maintenance and upgrade system",
              ],
              keyFeatures: [
                "10,000+ digital learning resources",
                "15 modern classroom facilities",
                "Resource utilization rate: 85%",
                "Average maintenance time: 4 hours",
              ],
            },
            {
              component: "Effectiveness Measurement",
              description:
                "Multidimensional effectiveness evaluation and reporting system",
              standards: [
                "Comprehensive KPI set for each department (25+ indicators)",
                "Real-time dashboard reporting system with automatic updates",
                "AI-powered data analysis and effectiveness forecasting",
                "Periodic social impact and ROI reporting",
              ],
              keyFeatures: [
                "Reporting frequency: daily/weekly/monthly/quarterly",
                "Data accuracy: 99.8%",
                "Report processing time: 5 minutes",
                "Number of monitoring dashboards: 18",
              ],
            },
          ],
        },
        quality: {
          id: "quality",
          title: "Quality Assurance System",
          subtitle:
            "Mechanisms and processes ensuring service quality maintenance and enhancement",
          content: [
            {
              mechanism: "Periodic Evaluation",
              description: "Comprehensive and structured evaluation system",
              details: [
                "4-week student evaluations with 15 specific indicators",
                "Overall course satisfaction survey with 30+ criteria",
                "Quarterly internal audits per ISO 9001:2015 standards",
                "External audits by 3 independent accreditation bodies",
                "Mid-term and final assessments with detailed rubrics",
                "Monthly learning data analysis",
              ],
              metrics: [
                "Evaluation frequency: every 4 weeks",
                "Student response rate: 95%",
                "Evaluation reliability: 0.92 Cronbach's Alpha",
                "Result processing time: 24 hours",
              ],
            },
            {
              mechanism: "Continuous Improvement",
              description: "Data and feedback-driven improvement process",
              details: [
                "Real-time automatic feedback collection and analysis system",
                "24-hour complaint resolution process with 5 escalation levels",
                "Kaizen methodology application in service improvement",
                "18% revenue R&D investment based on data and market needs",
                "Training program updates every 6 months",
                "Monthly quality council meetings",
              ],
              metrics: [
                "Improvements/year: 150+",
                "Improvement implementation time: 2-4 weeks",
                "Improvement success rate: 85%",
                "Improvement ROI: 3.2x",
              ],
            },
            {
              mechanism: "Information Transparency",
              description: "Transparent information disclosure mechanisms",
              details: [
                "100% disclosure of evaluation standards and scoring methods",
                "Detailed and understandable learning outcome reports with infographics",
                "Sharing of success data and 500+ real case studies",
                "Two-way transparent feedback and accountability mechanisms",
                "Public progress tracking system for parents",
                "Annual social impact reports",
              ],
              metrics: [
                "Information transparency: 95%",
                "Transparency satisfaction: 4.8/5.0",
                "Information update frequency: weekly",
                "Number of information channels: 8 (web, app, email, SMS, etc.)",
              ],
            },
          ],
        },
        commitments: {
          id: "commitments",
          title: "Student Commitments",
          subtitle:
            "Specific, measurable, and contract-bound commitments to our students",
          content: [
            {
              commitment: "Results Guarantee",
              details:
                "100% tuition refund if agreed training outcomes are not achieved per contract",
              specifics: [
                "Clearly defined 5-7 specific learning objectives in contract",
                "Measurement through standardized assessments and portfolio",
                "Evaluation timeframe: 30 days after course completion",
                "Refund process within 15 working days",
              ],
              successRate: "98.5% students achieve objectives",
            },
            {
              commitment: "24/7 Comprehensive Support",
              details:
                "Multi-channel support service with maximum 2-hour response time",
              specifics: [
                "24/7 hotline with professional support team",
                "Support via chat, email, video call",
                "Automatic ticket tracking system",
                "Dedicated technical and academic support teams",
              ],
              successRate: "99.2% responses within 2 hours",
            },
            {
              commitment: "Lifetime Knowledge Updates",
              details:
                "Free access to program updates and resources for 24 months post-graduation",
              specifics: [
                "Access to all updated course materials and resources",
                "Quarterly update workshops",
                "Monthly professional newsletters",
                "Continuous learning community participation",
              ],
              successRate: "45% alumni participate regularly",
            },
            {
              commitment: "Guaranteed Career Connections",
              details:
                "Guaranteed minimum 3 interview opportunities with hiring partners in target field",
              specifics: [
                "Profile matching with job requirements",
                "Interview training and CV building",
                "Post-interview follow-up and support",
                "Evaluation and improvement consultation",
              ],
              successRate: "85% employed within 90 days",
            },
            {
              commitment: "Long-term Development",
              details:
                "6 months free mentoring post-course and quarterly workshops",
              specifics: [
                "1 professional mentor supporting for 6 months",
                "4 skill development workshops/year",
                "Access to exclusive career resources",
                "Participation in global alumni network",
              ],
              successRate: "92% student satisfaction with mentoring",
            },
          ],
        },
        metrics: {
          id: "metrics",
          title: "Effectiveness & Financial Metrics",
          subtitle:
            "Metrics measuring operational effectiveness, investment, and impact",
          content: [
            {
              category: "Learning Effectiveness",
              items: [
                {
                  metric: "Course completion rate",
                  value: "96%",
                  trend: "+2% yoy",
                },
                {
                  metric: "Final assessment score",
                  value: "8.7/10",
                  trend: "+0.3 yoy",
                },
                {
                  metric: "Returning student rate",
                  value: "48%",
                  trend: "+5% yoy",
                },
                {
                  metric: "Average daily study time",
                  value: "2.5 hours",
                  trend: "stable",
                },
                {
                  metric: "Lesson engagement rate",
                  value: "85%",
                  trend: "+8% yoy",
                },
                {
                  metric: "Overall satisfaction",
                  value: "4.8/5.0",
                  trend: "+0.2 yoy",
                },
              ],
              description:
                "Metrics measuring learning effectiveness and student satisfaction",
            },
            {
              category: "Investment Effectiveness",
              items: [
                {
                  metric: "Average student ROI",
                  value: "4.2x",
                  trend: "+0.3x yoy",
                },
                {
                  metric: "Average payback period",
                  value: "14 months",
                  trend: "-2 months yoy",
                },
                {
                  metric: "Student acquisition cost",
                  value: "$850",
                  trend: "-$50 yoy",
                },
                {
                  metric: "Student Lifetime Value",
                  value: "$12,500",
                  trend: "+$1,200 yoy",
                },
                { metric: "Conversion rate", value: "35%", trend: "+3% yoy" },
                {
                  metric: "Student service cost",
                  value: "$420",
                  trend: "-$30 yoy",
                },
              ],
              description: "Financial and investment effectiveness metrics",
            },
            {
              category: "Sustainable Development",
              items: [
                {
                  metric: "Revenue growth rate",
                  value: "35%/year",
                  trend: "+5% yoy",
                },
                {
                  metric: "Reinvestment ratio",
                  value: "40% profits",
                  trend: "stable",
                },
                {
                  metric: "Professional team size",
                  value: "120+ people",
                  trend: "+15% yoy",
                },
                { metric: "New courses/year", value: "8", trend: "+2 yoy" },
                {
                  metric: "Talent retention rate",
                  value: "92%",
                  trend: "+3% yoy",
                },
                {
                  metric: "R&D investment",
                  value: "18% revenue",
                  trend: "+2% yoy",
                },
              ],
              description:
                "Organizational development and sustainability metrics",
            },
            {
              category: "Social Impact",
              items: [
                {
                  metric: "Graduates/year",
                  value: "1,200+",
                  trend: "+20% yoy",
                },
                {
                  metric: "Jobs created/year",
                  value: "850+",
                  trend: "+15% yoy",
                },
                {
                  metric: "Corporate partners",
                  value: "75+",
                  trend: "+12 yoy",
                },
                {
                  metric: "Scholarships provided/year",
                  value: "$150,000",
                  trend: "+25% yoy",
                },
                {
                  metric: "Community events/year",
                  value: "36+",
                  trend: "+5 yoy",
                },
                { metric: "Net Promoter Score", value: "72", trend: "+5 yoy" },
              ],
              description: "Community and social impact metrics",
            },
          ],
        },
      },

      menuItems: [
        { id: "pillars", label: "Value Pillars" },
        { id: "framework", label: "Operational Framework" },
        { id: "quality", label: "Quality Assurance" },
        { id: "commitments", label: "Student Commitments" },
        { id: "metrics", label: "Performance Metrics" },
      ],

      conclusion:
        "AGUA's value system is designed as a unified entity - from strategy to operations, from people to technology. Each component is measured with specific indicators, evaluated periodically, and improved continuously. We don't just commit - we prove with tangible results, creating positive and sustainable impact for each student and the entire community.",
    },
  };

  const t = content[language] || content.vie;
  const activeContent = t.sections[activeSection];

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      );
    }
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case "pillars":
        return (
          <div className="space-y-8">
            {activeContent.content.map((pillar) => (
              <div
                key={pillar.id}
                className="title-text pillar-item border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Header with Pillar Number */}
                  <div
                    className="lg:w-1/4 p-8"
                    style={{ backgroundColor: "#0974B6" }}
                  >
                    <div className="text-white">
                      <div className="text-5xl font-bold text-blue-100 mb-2">
                        0{pillar.id}
                      </div>
                      <div className="w-12 h-1 bg-blue-300 mb-4"></div>
                      <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                      <div className="text-blue-200 text-sm">
                        {language === "vie" ? "Trụ cột" : "Pillar"} {pillar.id}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/4 p-8">
                    <p className="text-gray-700 mb-8 text-lg">
                      {pillar.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                      {/* Key Metrics */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                          {language === "vie" ? "Chỉ Số Chính" : "Key Metrics"}
                        </h4>
                        <div className="space-y-3">
                          {pillar.keyMetrics.map((metric, i) => (
                            <div
                              key={i}
                              className="border-l-4 pl-4 py-2"
                              style={{ borderColor: "#0974B6" }}
                            >
                              <div
                                className="text-2xl font-bold"
                                style={{ color: "#0974B6" }}
                              >
                                {metric.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Processes */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                          {language === "vie" ? "Quy Trình" : "Processes"}
                        </h4>
                        <ul className="space-y-2">
                          {pillar.processes.map((process, i) => (
                            <li
                              key={i}
                              className="text-gray-600 text-sm flex items-start"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0"
                                style={{ backgroundColor: "#0974B6" }}
                              ></div>
                              <span>{process}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                          {language === "vie" ? "Công Cụ" : "Tools"}
                        </h4>
                        <ul className="space-y-2">
                          {pillar.tools.map((tool, i) => (
                            <li
                              key={i}
                              className="text-gray-600 text-sm flex items-start"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0"
                                style={{ backgroundColor: "#0974B6" }}
                              ></div>
                              <span>{tool}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "framework":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {activeContent.content.map((component, index) => (
              <div
                key={index}
                className="title-text framework-item bg-white rounded-xl p-8 border border-gray-200"
              >
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">
                    {language === "vie" ? "Thành phần" : "Component"}{" "}
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {component.component}
                  </h3>
                  <p className="text-gray-600 mb-4">{component.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                      {language === "vie" ? "Tiêu Chuẩn" : "Standards"}
                    </h4>
                    <ul className="space-y-2">
                      {component.standards.map((standard, i) => (
                        <li key={i} className="text-gray-600 text-sm">
                          <span className="text-gray-900 font-medium">•</span>{" "}
                          {standard}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                      {language === "vie" ? "Đặc Điểm" : "Key Features"}
                    </h4>
                    <ul className="space-y-2">
                      {component.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-gray-600 text-sm">
                          <span className="text-gray-900 font-medium">•</span>{" "}
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "quality":
        return (
          <div className="space-y-8">
            {activeContent.content.map((mechanism, index) => (
              <div
                key={index}
                className="title-text quality-item border border-gray-200 rounded-xl overflow-hidden"
              >
                <div className="bg-gray-50 p-8 border-b border-gray-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        {language === "vie" ? "Cơ chế" : "Mechanism"}{" "}
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {mechanism.mechanism}
                      </h3>
                      <p className="text-gray-600">{mechanism.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                        {language === "vie"
                          ? "Chi Tiết Thực Hiện"
                          : "Implementation Details"}
                      </h4>
                      <ul className="space-y-3">
                        {mechanism.details.map((detail, i) => (
                          <li
                            key={i}
                            className="text-gray-600 flex items-start"
                          >
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-xs font-bold text-gray-700">
                                {i + 1}
                              </span>
                            </div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                        {language === "vie"
                          ? "Chỉ Số Đo Lường"
                          : "Measurement Metrics"}
                      </h4>
                      <div className="space-y-4">
                        {mechanism.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="border border-gray-200 rounded-lg p-4"
                          >
                            <div className="text-lg font-bold text-gray-900">
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "commitments":
        return (
          <div className="space-y-6">
            {activeContent.content.map((item, index) => (
              <div
                key={index}
                className="title-text commitment-item border border-gray-200 rounded-xl overflow-hidden"
              >
                <div
                  className="text-white p-6"
                  style={{ backgroundColor: "#0974B6" }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-blue-100 mb-1">
                        {language === "vie" ? "Cam kết" : "Commitment"}{" "}
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {item.commitment}
                      </h3>
                      <p className="text-blue-100">{item.details}</p>
                    </div>
                    <div className="bg-white text-blue-600 text-sm font-bold px-3 py-1 rounded-full">
                      {item.successRate}
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-50">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                    {language === "vie"
                      ? "Chi Tiết Cụ Thể"
                      : "Specific Details"}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {item.specifics.map((specific, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm border border-gray-200 rounded-lg p-4 bg-white"
                      >
                        <div className="flex items-start">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-1 mr-3 flex-shrink-0"
                            style={{ backgroundColor: "#0974B6" }}
                          ></div>
                          <span>{specific}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        );

      case "metrics":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {activeContent.content.map((category, index) => (
              <div key={index} className="metrics-item">
                <div className="title-text border border-gray-200 rounded-xl overflow-hidden h-full">
                  <div
                    className="text-white p-6"
                    style={{ backgroundColor: "#0974B6" }}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {category.category}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      {category.description}
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="space-y-4">
                      {category.items.map((item, i) => (
                        <div
                          key={i}
                          className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div className="text-gray-700 font-medium">
                              {item.metric}
                            </div>
                            <div
                              className={`text-sm font-bold px-2 py-1 rounded ${
                                item.trend.includes("+")
                                  ? "bg-green-100 text-green-800"
                                  : item.trend.includes("-")
                                    ? "bg-red-100 text-red-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {item.trend}
                            </div>
                          </div>
                          <div
                            className="text-2xl font-bold"
                            style={{ color: "#0974B6" }}
                          >
                            {item.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-header text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gray-300 mx-auto mt-8"></div>
        </div>

        {/* Introduction */}
        <div className="intro-section max-w-5xl mx-auto mb-16">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid - 3:7 Layout */}
      <div className="main-content pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Left Sidebar - Menu (3 columns) */}
          <div className="lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-xl border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900">
                    {language === "vie" ? "Nội Dung Chính" : "Main Content"}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {language === "vie"
                      ? "Chọn phần để xem chi tiết"
                      : "Select a section for details"}
                  </p>
                </div>

                <nav className="p-4">
                  <div className="space-y-1">
                    {t.menuItems.map((item) => {
                      const isActive = activeSection === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                            isActive
                              ? "text-white shadow-lg"
                              : "text-gray-700 hover:bg-gray-100 hover:shadow-sm"
                          }`}
                          style={isActive ? { backgroundColor: "#0974B6" } : {}}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-3 h-3 rounded-full mr-3 ${
                                isActive ? "bg-white" : "bg-blue-300"
                              }`}
                            ></div>
                            <span className="font-medium">{item.label}</span>
                            {isActive && (
                              <div className="ml-auto">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </nav>
              </div>
            </div>
          </div>

          {/* Right Content Area (7 columns) */}
          <div className="lg:col-span-7">
            <div ref={contentRef} className="content-area">
              {/* Active Section Header */}
              <div className="mb-8">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
                    {language === "vie" ? "PHẦN HIỆN TẠI" : "CURRENT SECTION"}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {activeContent.title}
                  </h2>
                  <p className="text-gray-600 mt-2 text-lg">
                    {activeContent.subtitle}
                  </p>
                </div>
                <div className="w-24 h-1 bg-gray-900"></div>
              </div>

              {/* Active Content */}
              <div className="content-body">{renderContent()}</div>

              {/* Conclusion Section */}
              <div className="conclusion-section mt-16 pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="text-center">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      "{t.conclusion}"
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                      <div className="text-gray-900 text-sm font-bold px-4 py-2 bg-white border border-gray-200 rounded-lg">
                        ISO 9001:2015
                      </div>
                      <div className="text-gray-900 text-sm font-bold px-4 py-2 bg-white border border-gray-200 rounded-lg">
                        {language === "vie"
                          ? "Đo lường hiệu quả"
                          : "Effectiveness Measured"}
                      </div>
                      <div className="text-gray-900 text-sm font-bold px-4 py-2 bg-white border border-gray-200 rounded-lg">
                        {language === "vie"
                          ? "Cải tiến liên tục"
                          : "Continuous Improvement"}
                      </div>
                      <div className="text-gray-900 text-sm font-bold px-4 py-2 bg-white border border-gray-200 rounded-lg">
                        {language === "vie"
                          ? "Minh bạch thông tin"
                          : "Information Transparency"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
