import DeepsphereAi from "../assets/deepsphere_ai.jpg";
import TCS from "../assets/tata_consultancy_services.jpg";
import LLMs from "../assets/llmatscale-logo.png"

export const experieceList = [
    {
        "company_name": "LLM Artificial Intelligence India Private Limited",
        "role": "Senior Data Scientist",
        "period": "Dec 2023 - Present",
        "location": "Bangalore",
        "logo": `${LLMs}`,
        "about": [{
            "aboutsone": "Leading multiple GenAI and RAG projects for Fortune 500 clients, specializing in enterprise AI solutions with focus on retrieval-augmented generation, multimodal AI, and agentic workflows.",
            "aboutstwo": "Architecting scalable AI systems using LangChain, LlamaIndex, and cloud platforms (AWS Bedrock, Azure OpenAI) to deliver production-grade AI applications.",
            "aboutsthree": "Implementing advanced vector database solutions (Pinecone, Weaviate, ChromaDB) for semantic search and knowledge retrieval at scale.",
            "aboutsfour": "Driving innovation in LLMOps and MLOps practices, establishing best practices for model deployment, monitoring, and evaluation."
        }],
        "projects": [
            {
                "name": "AskGuru - Intelligent Educational Assistant",
                "client": "Leading EdTech Platform",
                "problem_statement": "Educational institutions needed an intelligent Q&A system capable of understanding complex educational content and providing accurate, context-aware responses to students and educators across multiple subjects and grade levels.",
                "approach": "Implemented a sophisticated RAG architecture combining semantic search with contextual understanding. Used LangChain for orchestration, Pinecone for vector storage, and OpenAI GPT-4 for generation. Created custom prompt engineering strategies for educational context.",
                "tech_stack": ["LangChain", "Pinecone", "OpenAI GPT-4", "FastAPI", "Redis", "PostgreSQL", "Docker", "AWS ECS"],
                "contribution": "Led end-to-end architecture design and implementation. Designed the chunking strategy for educational content, implemented hybrid search (semantic + keyword), and built the evaluation framework using LLM-as-a-judge methodology. Reduced query response time from 8s to 3s while improving accuracy.",
                "business_value": "Reduced query response time by 60% and improved answer accuracy to 92%. Enabled the platform to handle 10,000+ daily queries, reducing support ticket volume by 45% and increasing student engagement by 35%."
            },
            {
                "name": "CalPERS RAG - Retirement Benefits Assistant",
                "client": "California Public Employees' Retirement System (CalPERS)",
                "problem_statement": "Customer care executives struggled with retrieving accurate information from complex, multi-layered retirement benefits documentation spanning 10,000+ pages. Manual search was time-consuming and led to inconsistent responses.",
                "approach": "Built an advanced RAG system with hybrid search combining dense (semantic) and sparse (BM25) retrieval. Implemented document preprocessing pipeline with intelligent chunking based on document structure. Used Azure OpenAI for generation with custom prompt templates for compliance.",
                "tech_stack": ["LlamaIndex", "Weaviate", "Azure OpenAI", "Python", "FastAPI", "Azure Functions", "Cosmos DB"],
                "contribution": "Implemented hybrid search strategy that improved retrieval precision by 40%. Designed the document ingestion pipeline handling PDFs, Word docs, and structured data. Built confidence scoring system and citation mechanism for transparency. Created evaluation dataset with 500+ QA pairs.",
                "business_value": "Improved customer inquiry response accuracy by 40% and reduced average handle time from 12 minutes to 5 minutes. Enabled executives to handle 2.5x more queries per day, saving $800K annually in operational costs."
            },
            {
                "name": "Energy Efficiency for JTC - Smart Building RAG",
                "client": "JTC Corporation, Singapore",
                "problem_statement": "JTC needed to optimize energy consumption across their industrial facilities by analyzing historical data, maintenance records, IoT sensor data, and identifying actionable efficiency opportunities from unstructured reports.",
                "approach": "Developed a RAG system integrated with time-series analysis for energy consumption patterns. Combined LLM-based insights with statistical forecasting. Used ChromaDB for document embeddings and AWS Bedrock for multi-modal understanding of building blueprints and sensor data.",
                "tech_stack": ["ChromaDB", "AWS Bedrock (Claude)", "AWS Lambda", "S3", "TimeStream", "Prophet", "Streamlit", "LangChain"],
                "contribution": "Designed end-to-end pipeline integrating structured time-series data with unstructured maintenance logs and reports. Built custom agents for root cause analysis and recommendation generation. Implemented monitoring dashboard with real-time energy insights.",
                "business_value": "Identified 30% energy savings potential across facilities, projected to save $2M+ annually. Reduced energy audit time from 2 weeks to 2 days. Generated automated recommendations that led to 15% immediate efficiency improvements."
            }
        ]
    },
    {
        "company_name": "Deepsphere AI India Private Limited",
        "role": "Data Scientist",
        "period": "Feb 2021 - Nov 2023",
        "location": "Chennai",
        "logo": `${DeepsphereAi}`,
        "about": [{
            "aboutsone": "Delivered end-to-end ML and NLP solutions for clients across education, government, and commodity trading sectors, focusing on classification, generation, and forecasting applications.",
            "aboutstwo": "Built production-ready APIs and deployed models on cloud platforms (Azure, AWS) with focus on performance optimization and scalability.",
            "aboutsthree": "Established MLOps practices including experiment tracking, model versioning, and automated deployment pipelines.",
            "aboutsfour": "Collaborated with cross-functional teams to translate business requirements into technical solutions, delivering measurable business impact."
        }],
        "projects": [
            {
                "name": "Question & Content Generation Platform",
                "client": "Major EdTech Platform",
                "problem_statement": "Educational content creators needed to generate diverse, high-quality assessment questions at scale across multiple subjects and difficulty levels while maintaining pedagogical standards and avoiding duplication.",
                "approach": "Fine-tuned GPT-3 on curated educational datasets with subject-specific taxonomies. Implemented quality filters and deduplication algorithms. Built a feedback loop where educators rated generated content to continuously improve the model.",
                "tech_stack": ["GPT-3", "Python", "PostgreSQL", "Flask", "Redis", "Celery", "Azure ML", "Docker"],
                "contribution": "Designed the fine-tuning strategy and curriculum for question generation. Built the content generation pipeline with quality assurance checks. Implemented A/B testing framework to compare generated content with human-created content. Created educator feedback interface.",
                "business_value": "Generated 10,000+ high-quality questions monthly, reducing content creation cost by 60%. Improved content creation speed by 10x while maintaining 85% quality approval rate from educators."
            },
            {
                "name": "ELP Profanity Classification System",
                "client": "California Department of Motor Vehicles (DMV)",
                "problem_statement": "DMV needed to automatically detect profanity and offensive content in personalized license plate applications in real-time, handling slang, obfuscation techniques, and context-dependent phrases across multiple languages.",
                "approach": "Developed multi-label classification system using BERT and LSTM ensemble. Integrated Azure OpenAI for few-shot learning to handle edge cases. Built real-time API with Redis caching for frequently checked patterns. Implemented human-in-the-loop review for borderline cases.",
                "tech_stack": ["BERT", "LSTM", "TensorFlow", "Azure OpenAI", "Redis", "FastAPI", "Docker", "Kubernetes", "Azure ML"],
                "contribution": "Achieved 94% accuracy in profanity detection by combining traditional NLP with transformer models. Implemented caching strategy reducing API latency to <100ms. Built feedback system where human reviewers could correct model predictions, which were used for continuous model improvement.",
                "business_value": "Reduced manual moderation workload by 70%, processing 50,000+ applications monthly. Decreased review time from 48 hours to real-time processing. Client sent appreciation email highlighting the system's accuracy and efficiency.",
                "client_appreciation": "Received formal appreciation from DMV leadership for delivering a robust, accurate system that significantly improved processing efficiency."
            },
            {
                "name": "CPO (Crude Palm Oil) Price Forecasting",
                "client": "Apical Group - Leading Commodity Trader",
                "problem_statement": "Commodity traders needed accurate short-term and medium-term price forecasts for crude palm oil to optimize trading strategies, hedge positions, and manage inventory in a highly volatile market affected by weather, geopolitics, and global demand.",
                "approach": "Built ensemble forecasting system combining statistical models (ARIMA, SARIMAX), deep learning (LSTM), and Prophet for trend and seasonality. Integrated external features: weather data, production reports, currency exchange rates, and news sentiment. Used AWS Forecast for automated model selection and hyperparameter tuning.",
                "tech_stack": ["AWS Forecast", "Prophet", "ARIMA", "LSTM", "XGBoost", "Python", "MLflow", "AWS SageMaker", "Lambda", "S3"],
                "contribution": "Developed forecasting models achieving 85% directional accuracy for 7-day forecasts. Built feature engineering pipeline incorporating 20+ external signals. Implemented MLOps workflow with automated retraining, A/B testing, and monitoring. Created Tableau dashboards for traders showing forecasts with confidence intervals.",
                "business_value": "Saved $2M+ in trading decisions through improved forecast accuracy. Reduced forecast error by 30% compared to previous baseline. Enabled traders to execute 40% more profitable trades. Client provided written appreciation highlighting business impact.",
                "client_appreciation": "Received email from Apical's Head of Trading commending the accuracy and reliability of the forecasting system."
            }
        ]
    },
    {
        "company_name": "Tata Consultancy Services (TCS)",
        "role": "Data Engineer",
        "period": "Mar 2018 - Jan 2021",
        "location": "Chennai",
        "logo": `${TCS}`,
        "about": [{
            "aboutsone": "Built enterprise-scale data engineering solutions for large retail client, processing terabytes of transactional data daily to drive loss prevention and inventory management decisions.",
            "aboutstwo": "Designed and implemented data warehouse architecture, ETL pipelines, and batch processing systems using Amazon proprietary tools and cloud infrastructure.",
            "aboutsthree": "Collaborated with business stakeholders and data scientists to translate analytical requirements into scalable data solutions.",
            "aboutsfour": "Established data quality frameworks and monitoring systems ensuring data accuracy and pipeline reliability."
        }],
        "projects": [
            {
                "name": "SAVE - Shrink Analytics Value Engine",
                "client": "Amazon - Global Loss Prevention Team",
                "problem_statement": "Amazon's Loss Prevention team needed a unified analytics platform to integrate data from multiple sources (inventory systems, cameras, employee logs, supplier data) to identify patterns in inventory shrinkage across 100+ fulfillment centers, processing billions of transactions.",
                "approach": "Designed and built a comprehensive Data Warehouse integrating aggregated transaction data and High Risk Value (HRV) data. Implemented star schema for dimensional modeling. Built ETL pipelines using Amazon's proprietary ETL framework. Created batch processes for near-real-time data synchronization from OLTP (Redshift) to OLAP (MySQL) systems.",
                "tech_stack": ["Amazon Redshift", "MySQL", "Amazon S3", "AWS Lambda", "Python", "Amazon ETL Tools", "Apache Spark", "Tableau", "SQL"],
                "contribution": "Led full development lifecycle from requirements gathering to deployment. Designed dimensional data model supporting complex analytical queries. Engineered ETL processes for 15+ shrink parameters, reducing data processing time by 30%. Built data quality validation framework catching 95% of data anomalies before loading. Created Tableau dashboards for executive reporting.",
                "business_value": "Identified $5M+ in shrinkage patterns and root causes across fulfillment network. Enabled Loss Prevention team to analyze shrink trends in real-time rather than monthly. Reduced data processing time from 12 hours to 3 hours, enabling faster decision-making. Improved data accessibility for 200+ analysts and business users."
            }
        ]
    }
];