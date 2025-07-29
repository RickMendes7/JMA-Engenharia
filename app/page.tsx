"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Zap,
  Sun,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Menu,
  X,
  ChevronRight,
  Award,
  Clock,
  CheckCircle,
  Users,
  TrendingUp,
  Lightbulb,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function JMAEngenhariaEletrica() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    cidade: "",
    mensagem: "",
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobre", "servicos", "projetos", "depoimentos", "blog", "contato"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, servico: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:
    
Nome: ${formData.nome}
Telefone: ${formData.telefone}
Email: ${formData.email}
Serviço: ${formData.servico}
Cidade: ${formData.cidade}
Mensagem: ${formData.mensagem}`

    const whatsappUrl = `https://wa.me/5511946967727?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const testimonials = [
    {
      name: "Ana Paula Silva",
      role: "Proprietária Residencial",
      location: "Alphaville - SP",
      rating: 5,
      comment:
        "Excelente trabalho do Eng. Jodalvo! O projeto elétrico da minha casa ficou perfeito. Muito profissional, pontual e preço justo. Super recomendo a JMA!",
      project: "Projeto Elétrico",
      date: "Dezembro 2023",
    },
    {
      name: "Carlos Mendes",
      role: "Empresário",
      location: "Vila Madalena - SP",
      rating: 5,
      comment:
        "Contratei a JMA para o projeto elétrico da minha loja. Ficou tudo perfeito! Iluminação moderna, instalação impecável e dentro do prazo. Equipe muito competente e atendimento diferenciado.",
      project: "Projeto Elétrico Comercial",
      date: "Janeiro 2024",
    },
    {
      name: "Marina Costa",
      role: "Arquiteta",
      location: "São Paulo - SP",
      rating: 5,
      comment:
        "Parceria excelente! Sempre trabalho com a JMA nos meus projetos residenciais. Qualidade técnica impecável, cumpre prazos e tem preço competitivo. Clientes sempre satisfeitos!",
      project: "Múltiplos Projetos Residenciais",
      date: "Março 2024",
    },
  ]

  const blogPosts = [
    {
      title: "Guia Completo: Como Dimensionar um Projeto Elétrico Residencial",
      excerpt:
        "Aprenda os passos essenciais para dimensionar corretamente a instalação elétrica da sua casa, desde o cálculo de cargas até a escolha dos disjuntores.",
      date: "15 Mar 2024",
      readTime: "8 min",
      category: "Projetos Elétricos",
      author: "Eng. Jodalvo Mendes",
    },
    {
      title: "NBR 5410: Principais Mudanças na Norma de Instalações Elétricas",
      excerpt:
        "Conheça as principais atualizações da NBR 5410 e como elas impactam projetos elétricos residenciais e comerciais.",
      date: "05 Mar 2024",
      readTime: "6 min",
      category: "Normas Técnicas",
      author: "Eng. Jodalvo Mendes",
    },
    {
      title: "SPDA: Como Proteger sua Casa contra Raios - Guia Técnico",
      excerpt:
        "Entenda como funciona o Sistema de Proteção contra Descargas Atmosféricas e por que é essencial para sua segurança.",
      date: "28 Fev 2024",
      readTime: "10 min",
      category: "Segurança Elétrica",
      author: "Eng. Jodalvo Mendes",
    },
  ]

  // --- LISTA DE SERVIÇOS (usada em #servicos) ---
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Projetos Elétricos",
      description: "Dimensionamento e detalhamento conforme NBR-5410.",
      features: ["Planta elétrica", "Memorial", "ART"],
      
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Projetos e Laudos de SPDA",
      description: ".",
      features: ["Projeto 3D", "Homologação ANEEL", "Garantia 25 anos"],
      
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "SPDA / Aterramento",
      description: "Proteção contra descargas atmosféricas conforme NBR-5419.",
      features: ["Projeto", "Instalação", "Laudo"],
    },
  ]

  // --- LISTA DE PROJETOS (usada em #projetos) ---
  const projects = [
    {
      title: "Residência 400 m² – Alphaville",
      location: "Barueri - SP",
      date: "2024",
      description: "Projeto elétrico completo + 8 kWp FV • Economia 90 %.",
      category: "Residencial",
      investment: "R$ 85 000",
      economy: "R$ 800/mês",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Loja 250 m² – Vila Madalena",
      location: "São Paulo - SP",
      date: "2023",
      description: "Iluminação LED e adequação de carga • ROI 2 anos.",
      category: "Comercial",
      investment: "R$ 35 000",
      economy: "R$ 400/mês",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">JMA Serviços Elétricos</h1>
                <p className="text-xs text-gray-600">Eng. Jodalvo Mendes - CREA SP-2622184255</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
              {[
                { id: "home", label: "Início" },
                { id: "sobre", label: "Sobre" },
                { id: "servicos", label: "Serviços" },
                { id: "projetos", label: "Projetos" },
                { id: "depoimentos", label: "Depoimentos" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? "text-blue-600 font-semibold" : "text-gray-700"
                  }`}
                  aria-label={`Ir para seção ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <Button onClick={() => scrollToSection("contato")} className="bg-blue-600 hover:bg-blue-700">
                Orçamento Grátis
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu mobile"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
              role="navigation"
              aria-label="Menu mobile"
            >
              <div className="flex flex-col space-y-4">
                {[
                  { id: "home", label: "Início" },
                  { id: "sobre", label: "Sobre" },
                  { id: "servicos", label: "Serviços" },
                  { id: "projetos", label: "Projetos" },
                  { id: "depoimentos", label: "Depoimentos" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <Button onClick={() => scrollToSection("contato")} className="bg-blue-600 hover:bg-blue-700 w-full">
                  Orçamento Grátis
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    ✓ Engenheiro Credenciado CREA SP-2622184255
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">⭐ 5.0 - 47 Avaliações</Badge>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Projetos</span> Instalação e Manutenção Elétrica
                </h1>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-700">Industrial, Predial e Residencial</h2>

                <div className="flex flex-wrap gap-3">
                  {["Projetos Elétricos", "Instalações", "Manutenção", "Laudos ART", "SPDA"].map((service) => (
                    <Badge key={service} variant="outline" className="text-sm">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                  onClick={() => scrollToSection("contato")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Orçamento Grátis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5511946967726?text=Olá! Preciso de um orçamento para projeto elétrico.",
                      "_blank",
                    )
                  }
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp (11) 94696-7726
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Eng. Jodalvo Mendes - Engenheiro Eletricista em São Paulo"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl -z-10"></div>

              {/* Floating Cards */}
              <div className="absolute -left-4 top-20 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">CREA Ativo</span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-20 bg-white p-4 rounded-lg shadow-lg border">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">5.0 ⭐ (47 avaliações)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre a JMA Engenharia Elétrica</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça nossa trajetória de excelência em engenharia elétrica e o compromisso com a qualidade que nos
                torna referência em São Paulo
              </p>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Com mais de 20 anos de experiência, oferecemos serviços de alta qualidade com foco em excelência e
                      satisfação. Nossa equipe é formada por profissionais altamente qualificados, prontos para entregar
                      soluções eficientes e personalizadas. Atendimento em São Paulo e região metropolita.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <Award className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Formação</h4>
                        <p className="text-gray-600">Engenharia Elétrica</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Experiência</h4>
                        <p className="text-gray-600">20+ anos no mercado</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Atendimento</h4>
                        <p className="text-gray-600">São Paulo e região</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">CREA</h4>
                        <p className="text-gray-600">SP-2622184255 Ativo</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-blue-600">
                    <CardHeader>
                      <CardTitle className="text-blue-600 flex items-center">
                        <Lightbulb className="h-5 w-5 mr-2" />
                        Nossa Missão
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Fornecer serviços de engenharia elétrica com qualidade, inovação e responsabilidade, superando
                        as expectativas dos clientes e contribuindo para o desenvolvimento sustentável.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-600">
                    <CardHeader>
                      <CardTitle className="text-green-600 flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Nossa Visão
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Ser referência nacional em engenharia elétrica, reconhecida pela excelência técnica,
                        confiabilidade e compromisso com a evolução do setor.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-orange-600">
                    <CardHeader>
                      <CardTitle className="text-orange-600 flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Nossos Valores
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["Excelência", "Ética", "Inovação", "Segurança"].map((value) => (
                          <Badge key={value} variant="secondary" className="text-sm">
                            {value}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Certificações e Diferenciais */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Certificações e Diferenciais</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: <Award className="h-8 w-8" />,
                      title: "CREA Ativo",
                      description: "Registro profissional ativo no CREA-SP",
                    },
                    {
                      icon: <CheckCircle className="h-8 w-8" />,
                      title: "NBR Atualizada",
                      description: "Projetos conforme normas técnicas vigentes",
                    },
                    {
                      icon: <Clock className="h-8 w-8" />,
                      title: "Prazo Garantido",
                      description: "Cumprimento rigoroso de cronogramas",
                    },
                    {
                      icon: <Users className="h-8 w-8" />,
                      title: "Suporte Técnico",
                      description: "Acompanhamento pós-entrega do projeto",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-blue-600 mb-3 flex justify-center">{item.icon}</div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Serviços de Engenharia Elétrica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em engenharia elétrica com qualidade técnica, segurança e preços
              competitivos. Todos os serviços incluem ART e garantia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-900">Incluso no serviço:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <Button
                    variant="ghost"
                    className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    onClick={() => scrollToSection("contato")}
                  >
                    Solicitar Orçamento
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block bg-blue-600 text-white border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Precisa de um serviço personalizado?</h3>
                <p className="mb-4">Entre em contato para um orçamento sob medida para seu projeto</p>
                <Button
                  variant="secondary"
                  onClick={() => scrollToSection("contato")}
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Falar com Especialista
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="projetos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Projetos de Destaque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos de engenharia elétrica que realizamos em São Paulo e veja como podemos ajudar
              você
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - Projeto de engenharia elétrica em ${project.location}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-blue-600 text-white">{project.category}</Badge>
                    <Badge variant="secondary" className="bg-white/90">
                      {project.date}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Economia: {project.economy}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{project.investment}</div>
                      <div className="text-xs text-gray-500">Investimento</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">ROI: 4-6 anos</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => scrollToSection("contato")}>
                      Projeto Similar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Ver Mais Projetos
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <section id="depoimentos" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Depoimentos reais de clientes que confiaram na JMA para seus projetos elétricos e sistemas de energia
              solar
            </p>
            <div className="flex justify-center items-center mt-6 space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold">5.0</span>
              <span className="text-gray-600">(47 avaliações)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.date}
                    </Badge>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.role} • {testimonial.location}
                      </CardDescription>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <blockquote className="text-gray-700 italic leading-relaxed">"{testimonial.comment}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Quer deixar sua avaliação?</h3>
                <p className="text-gray-600 mb-4">Compartilhe sua experiência com a JMA Engenharia</p>
                <Button
                  variant="outline"
                  onClick={() => window.open("https://g.page/r/sua-pagina-google/review", "_blank")}
                >
                  Avaliar no Google
                  <Star className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solicite seu Orçamento Gratuito</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco para receber um orçamento personalizado. Atendemos São Paulo e região
              metropolitana com rapidez e qualidade garantida.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Formulário de Contato</CardTitle>
                <CardDescription>
                  Preencha os dados abaixo e entraremos em contato em até 2 horas durante horário comercial
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="text-sm font-medium">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone" className="text-sm font-medium">
                        Telefone/WhatsApp *
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(11) 94696-7726"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="servico" className="text-sm font-medium">
                      Tipo de Serviço *
                    </Label>
                    <Select onValueChange={handleSelectChange} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Selecione o serviço desejado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="projeto-residencial">Projeto Elétrico Residencial</SelectItem>
                        <SelectItem value="projeto-comercial">Projeto Elétrico Comercial</SelectItem>
                        <SelectItem value="instalacao">Instalação Elétrica</SelectItem>
                        <SelectItem value="laudo">Laudo Técnico/ART</SelectItem>
                        <SelectItem value="spda">SPDA/Para-raios</SelectItem>
                        <SelectItem value="manutencao">Manutenção Elétrica</SelectItem>
                        <SelectItem value="consultoria">Consultoria Técnica</SelectItem>
                        <SelectItem value="outro">Outro Serviço</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="cidade" className="text-sm font-medium">
                      Cidade *
                    </Label>
                    <Input
                      id="cidade"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleInputChange}
                      placeholder="São Paulo, Campinas, Guarulhos..."
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-sm font-medium">
                      Descrição do Projeto
                    </Label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto: área em m², tipo de imóvel, necessidades específicas..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Enviar via WhatsApp
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                  <CardDescription>Entre em contato pelos canais abaixo ou agende uma visita técnica</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Telefone/WhatsApp</h4>
                      <p className="text-gray-600 mb-2">
                        <a href="tel:+5511946967726" className="hover:text-blue-600 text-lg font-medium">
                          (11) 94696-7726
                        </a>
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          window.open(
                            "https://wa.me/5511946967726?text=Olá! Preciso de um orçamento para projeto elétrico.",
                            "_blank",
                          )
                        }
                      >
                        Chamar no WhatsApp
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">E-mail</h4>
                      <p className="text-gray-600">
                        <a href="mailto:contato@jmaengenharia.com.br" className="hover:text-blue-600">
                          contato@jmaengenharia.com.br
                        </a>
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Região de Atendimento</h4>
                      <p className="text-gray-600">
                        São Paulo, Campinas, Sorocaba, Santo André, São Bernardo, Guarulhos, Osasco, Barueri, Alphaville
                        e toda região metropolitana
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Horário de Atendimento</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                        <p className="text-sm text-green-600 font-medium">Emergências: 24h via WhatsApp</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 text-white border-0 shadow-xl">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Resposta Garantida</h3>
                  <p className="mb-6 text-blue-100">
                    Respondemos todos os orçamentos em até 2 horas durante horário comercial
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-bold text-lg">2h</div>
                      <div className="text-blue-100">Tempo de resposta</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">24h</div>
                      <div className="text-blue-100">Emergências</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">JMA Engenharia Elétrica</h3>
                  <p className="text-sm text-gray-400">Eng. Jodalvo Mendes - CREA SP</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Soluções completas em engenharia elétrica com mais de 20 anos de experiência. Projetos elétricos,
                Manutenções e instalações em São Paulo.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Navegação</h4>
              <div className="space-y-3">
                {[
                  { id: "home", label: "Início" },
                  { id: "sobre", label: "Sobre" },
                  { id: "servicos", label: "Serviços" },
                  { id: "projetos", label: "Projetos" },
                  { id: "depoimentos", label: "Depoimentos" },
                  { id: "blog", label: "Blog" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Serviços Principais</h4>
              <div className="space-y-3 text-gray-400">
                <p className="hover:text-white transition-colors cursor-pointer">Projetos Elétricos Residenciais</p>
                <p className="hover:text-white transition-colors cursor-pointer">Projetos Elétricos Comerciais</p>
                <p className="hover:text-white transition-colors cursor-pointer">Laudos Técnicos e ART</p>
                <p className="hover:text-white transition-colors cursor-pointer">SPDA e Aterramento</p>
                <p className="hover:text-white transition-colors cursor-pointer">Instalações Elétricas</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contato</h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+5511946967726" className="hover:text-white transition-colors">
                    (11) 94696-7726
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:contato@jmaengenharia.com.br" className="hover:text-white transition-colors">
                    contato@jmaengenharia.com.br
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span>CREA SP-2622184255</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>São Paulo - SP</span>
                </div>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 JMA Engenharia Elétrica - Eng. Jodalvo Mendes. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <Button
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-2xl z-50 animate-pulse"
        onClick={() =>
          window.open(
            "https://wa.me/5511946967726?text=Olá! Preciso de um orçamento para projeto elétrico em São Paulo.",
            "_blank",
          )
        }
        aria-label="Chamar no WhatsApp"
      >
        <Phone className="h-7 w-7" />
      </Button>
    </div>
  )
}